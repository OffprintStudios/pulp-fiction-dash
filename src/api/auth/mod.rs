pub mod models;

/* Rocket */
use rocket_contrib::json;
use rocket_contrib::json::Json;

/* Webserver */
use jsonwebtoken::{encode, Header, EncodingKey};

/* Library */
use crate::db::PulpDb;
use crate::db::users::user_document::UserDocument;
use crate::api::ApiResponse;
use models::login_user::LoginUser;
use models::jwt_payload::JwtPayload;
use models::client_user::ClientUser;

#[post("/auth/login", data = "<user_info>", format = "application/json")]
pub async fn login(conn: PulpDb, user_info: Json<LoginUser>) -> Result<ApiResponse, ApiResponse> {
    match UserDocument::login(conn.0.clone(), user_info.email.clone(), user_info.password.clone()).await {
        Some(user) => {
            let secret = dotenv!("JWT_SECRET");
            let user_payload = JwtPayload::build_payload(&user).await;
            let token = encode(&Header::default(), &user_payload, &EncodingKey::from_secret(secret.as_ref())).unwrap();
            let user_model = ClientUser::generate(user, Some(token)).await;

            Ok(ApiResponse::ok().data(json!(user_model)))
        },
        None => Err(ApiResponse::unauthorized().message("Your email and/or password don't match our records."))
    }
}

#[get("/auth/logout")]
pub async fn logout(_conn: PulpDb) {
    println!("Log out route hit!");
}