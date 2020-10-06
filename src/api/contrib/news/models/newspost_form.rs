/* Webserver */
use crate::db::news::NewsCategory;

#[derive(Serialize, Deserialize)]
#[serde(rename_all="camelCase")]
pub struct NewspostForm {
    pub title: String,
    pub desc: String,
    pub body: String,
    pub category: NewsCategory
}