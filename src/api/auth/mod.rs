pub mod models;

/* Rocket */
use rocket::http::{Cookie, CookieJar};
use rocket_contrib::json;
use rocket_contrib::json::Json;

/* Webserver */
use uuid::Uuid;
use time::OffsetDateTime;
use jsonwebtoken::{encode, Header, EncodingKey};

/* Library */
use crate::db::PulpDb;
use crate::db::users::user_document::UserDocument;
use crate::db::users::RefreshUser;
use crate::api::ApiResponse;
use models::{LoginUser, JwtPayload, ClientUser};

#[post("/login", data = "<user_info>", format = "application/json")]
pub async fn login(conn: PulpDb, user_info: Json<LoginUser>, cookies: &CookieJar<'_>) -> Result<ApiResponse, ApiResponse> {
    match UserDocument::login(conn.0.clone(), user_info.email.clone(), user_info.password.clone()).await {
        Ok(user) => {
            match user {
                Some(user) => {
                    let secret = dotenv!("JWT_SECRET");
                    let user_payload = JwtPayload::build_payload(&user).await;
                    let token = encode(&Header::default(), &user_payload, &EncodingKey::from_secret(secret.as_ref())).unwrap();
                    let user_model = ClientUser::generate(user.clone(), Some(token)).await;
                    let refresh_token_value = Uuid::new_v4().to_hyphenated().to_string();
                    let cookie = Cookie::build("refreshToken", refresh_token_value.clone())
                        .path("/")
                        .http_only(true)
                        .expires(OffsetDateTime::now_utc() + time::Duration::seconds(2628000));
        
                    match user.add_refresh_token(conn.0.clone(), refresh_token_value).await {
                        Ok(()) => {
                            cookies.add(cookie.finish());
                            Ok(ApiResponse::ok().data(json!(user_model)))
                        },
                        Err(_) => Err(ApiResponse::internal_server_error().message("Something went wrong adding your session to the database."))
                    }
                },
                None => Err(ApiResponse::unauthorized().message("Your email and/or password don't match our records."))
            }
        },
        Err(e) => Err(ApiResponse::unauthorized().message(&e))
    }
}

#[get("/refresh-token")]
pub async fn refresh_token(conn: PulpDb, user: RefreshUser, cookies: &CookieJar<'_>) -> Result<ApiResponse, ApiResponse> {
    let refresh_cookie = match cookies.get("refreshToken") {
        Some(cookie) => cookie,
        None => return Err(ApiResponse::unauthorized().message("No refresh cookie found."))
    };

    match UserDocument::check_refresh_token(conn.0.clone(), user.0._id.clone(), refresh_cookie.value().to_string()).await {
        Ok(true) => {
            let secret = dotenv!("JWT_SECRET");
            let this_user = UserDocument::find_one_by_id(conn.0.clone(), user.0._id.clone()).await.unwrap();
            let new_payload = JwtPayload::build_payload(&this_user).await;
            let token = encode(&Header::default(), &new_payload, &EncodingKey::from_secret(secret.as_ref())).unwrap();
            let user_model = ClientUser::generate(this_user, Some(token)).await;

            Ok(ApiResponse::ok().data(json!(user_model)))
        },
        Ok(false) => Err(ApiResponse::unauthorized().message("Your refresh token is invalid.")),
        Err(_) => Err(ApiResponse::internal_server_error().message("Something went wrong validating your refresh token."))
    }
}

#[get("/logout")]
pub async fn logout(conn: PulpDb, user: RefreshUser, cookies: &CookieJar<'_>) -> Result<ApiResponse, ApiResponse> {
    let refresh_cookie = match cookies.get("refreshToken") {
        Some(cookie) => cookie.value().to_string(),
        None => return Ok(ApiResponse::ok().message("No refresh token found."))
    };

    match user.0.clear_refresh_token(conn.0.clone(), refresh_cookie).await {
        Ok(()) => {
            cookies.remove(Cookie::named("refreshToken"));
            Ok(ApiResponse::ok().message("See you later!"))
        },
        Err(_) => Err(ApiResponse::internal_server_error().message("Something went wrong trying to log you out."))
    }
}