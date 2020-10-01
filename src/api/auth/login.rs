/* Rocket */
use rocket_contrib::json;
use rocket_contrib::json::Json;

/* Webserver */
use jsonwebtoken::{encode, Header};

/* Library */
use crate::db::PulpDb;
use crate::db::users::user_document::UserDocument;
use crate::api::ApiResponse;

#[derive(Serialize, Deserialize)]
pub struct LoginUser {
    email: String,
    password: String
}

#[post("/auth/login", data = "<user_info>", format = "application/json")]
pub async fn login(conn: PulpDb, user_info: Json<LoginUser>) {
    UserDocument::login(conn.0.clone(), user_info.email.clone(), user_info.password.clone()).await;
}