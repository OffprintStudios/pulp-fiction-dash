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
pub async fn login(conn: PulpDb, user_info: Json<LoginUser>) -> Result<ApiResponse, ApiResponse> {
    match UserDocument::login(conn.0.clone(), user_info.email.clone(), user_info.password.clone()).await {
        Some(user) => Ok(ApiResponse::ok().data(json!(user))),
        None => Err(ApiResponse::internal_server_error().message("Something went wrong! Try again in a little bit."))
    }
}