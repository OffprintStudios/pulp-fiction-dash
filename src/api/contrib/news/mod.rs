pub mod models;

/* Rocket */
use rocket_contrib::json;
use rocket_contrib::json::Json;

/* Library */
use crate::db::{PulpDb, DocumentMethods};
use crate::db::users::UserDocument;
use crate::db::news::NewsDocument;
use crate::api::ApiResponse;
use models::{NewspostForm};

#[post("/news/create-newspost", data = "<post_info>", format = "application/json")]
pub async fn create_newspost(conn: PulpDb, user: UserDocument, post_info: Json<NewspostForm>) -> Result<ApiResponse, ApiResponse> {
    let new_post = NewsDocument::new(user._id, post_info.0).await;
    match new_post.save(conn.0.clone()).await {
        Ok(()) => Ok(ApiResponse::created().message("News post created successfully!")),
        Err(()) => Err(ApiResponse::internal_server_error().message("Something went wrong creating this news post!"))
    }
}

#[patch("/news/edit-newspost", data = "<_post_info>", format = "application/json")]
pub async fn edit_newspost(_conn: PulpDb, _user: UserDocument, _post_info: Json<NewspostForm>) {
    println!("Edit newspost route hit!")
}

#[get("/news/fetch-all")]
pub async fn fetch_all(conn: PulpDb, _user: UserDocument) -> Result<ApiResponse, ApiResponse> {
    match NewsDocument::find_all(conn.0.clone()).await {
        Ok(docs) => Ok(ApiResponse::ok().data(json!(docs))),
        Err(e) => Err(ApiResponse::internal_server_error().message(&format!("{}", e)))
    }
}