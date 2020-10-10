use crate::db::news::NewsCategory;

use mongodb::bson::DateTime;

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all="camelCase")]
pub struct NewsDocument {
    #[serde(rename="_id")]
    pub id: String,
    pub user_id: String,
    pub title: String,
    pub desc: String,
    pub body: String,
    pub wordcount: i32,
    pub audit: NewsAudit,
    pub created_at: DateTime,
    pub updated_at: DateTime
}

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all="camelCase")]
pub struct NewsAudit {
    pub featured: bool,
    pub category: NewsCategory,
    pub published: bool,
    pub published_on: Option<DateTime>,
    pub is_deleted: bool
}