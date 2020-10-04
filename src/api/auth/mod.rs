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
use crate::api::ApiResponse;
use models::login_user::LoginUser;
use models::jwt_payload::JwtPayload;
use models::client_user::ClientUser;

#[post("/auth/login", data = "<user_info>", format = "application/json")]
pub async fn login(conn: PulpDb, user_info: Json<LoginUser>, cookies: &CookieJar<'_>) -> Result<ApiResponse, ApiResponse> {
    match UserDocument::login(conn.0.clone(), user_info.email.clone(), user_info.password.clone()).await {
        Ok(user) => {
            match user {
                Some(user) => {
                    let secret = dotenv!("JWT_SECRET");
                    let user_payload = JwtPayload::build_payload(&user).await;
                    let token = encode(&Header::default(), &user_payload, &EncodingKey::from_secret(secret.as_ref())).unwrap();
                    let user_model = ClientUser::generate(user, Some(token)).await;
                    let cookie = Cookie::build("refreshToken", Uuid::new_v4().to_hyphenated().to_string())
                        .path("/")
                        .http_only(true)
                        .expires(OffsetDateTime::now_utc() + time::Duration::seconds(2628000));
        
        
                    cookies.add(cookie.finish());
                    Ok(ApiResponse::ok().data(json!(user_model)))
                },
                None => Err(ApiResponse::unauthorized().message("Your email and/or password don't match our records."))
            }
        },
        Err(e) => Err(ApiResponse::unauthorized().message(&e))
    }
}

#[get("/auth/logout")]
pub async fn logout(_conn: PulpDb) {
    println!("Log out route hit!");
}