pub mod news_document;
pub mod news_category;

pub use news_document::{NewsDocument, NewsAudit};
pub use news_category::NewsCategory;

use mongodb::{Cursor, Database};
use mongodb::error::Result as MongoResult;
use mongodb::bson::{
    doc, DateTime, Bson, from_bson, ser::to_document, Document
};
use chrono::Utc;
use nanoid::nanoid;

use crate::db::DocumentMethods;
use crate::util::parsing::{get_wordcount, sanitize_html};
use crate::api::contrib::news::models::NewspostForm;

impl NewsDocument {
    pub async fn new(user_id: String, form: NewspostForm) -> Self {
        let news_id = nanoid!(10);
        
        let audit = NewsAudit {
            featured: false,
            category: form.category,
            published: false,
            published_on: None,
            is_deleted: false
        };

        NewsDocument {
            id: news_id,
            user_id: user_id,
            title: sanitize_html(&form.title).await,
            desc: sanitize_html(&form.desc).await,
            body: sanitize_html(&form.body).await,
            wordcount: get_wordcount(&sanitize_html(&form.body).await).await,
            audit: audit,
            created_at: DateTime(Utc::now()),
            updated_at: DateTime(Utc::now())
        }
    }
}

#[rocket::async_trait]
impl DocumentMethods for NewsDocument {
    async fn save(&self, db: Database) -> Result<(), ()> {
        let coll = db.collection("news");
        let doc = match to_document(self) {
            Ok(doc) => doc,
            Err(e) => unimplemented!("Problem converting {}", e)
        };

        match coll.insert_one(doc, None).await {
            Ok(_res) => Ok(()),
            Err(_e) => Err(())
        }
    }

    async fn find_one_by_id(db: Database, item_id: String) -> Option<Self> {
        let coll = db.collection("news");
        match coll.find_one(doc!{"_id": item_id}, None).await {
            Ok(doc) => {
                match doc {
                    Some(item) => {
                        let item_doc = from_bson::<NewsDocument>(Bson::Document(item)).unwrap();
                        Some(item_doc)
                    },
                    None => None
                }
            },
            Err(e) => unimplemented!("{}", e)
        }
    }

    async fn find_belonging_to(db: Database, user_id: String) -> Result<Vec<Self>, mongodb::error::Error> {
        use futures::stream::StreamExt;

        let coll = db.collection("news");
        let docs: Cursor = match coll.find(doc!{"user_id": user_id}, None).await {
            Ok(d) => d,
            Err(e) => return Err(e)
        };
        let results: Vec<MongoResult<Document>> = docs.collect().await;

        let mut posts: Vec<NewsDocument> = Vec::new();
        for doc in results {
            match doc {
                Ok(item) => posts.push(Self::convert_from_bson(item).await.unwrap()),
                Err(_) => unimplemented!("There was an error in the docs cursor. find_belonging_to")
            }
        }

        Ok(posts)
    }

    async fn find_all(db: Database) -> Result<Vec<Self>, mongodb::error::Error> {
        use futures::stream::StreamExt;

        let coll = db.collection("news");
        let docs: Cursor = match coll.find(None, None).await {
            Ok(d) => d,
            Err(e) => return Err(e)
        };
        let results: Vec<MongoResult<Document>> = docs.collect().await;

        let mut posts: Vec<NewsDocument> = Vec::new();
        for doc in results {
            match doc {
                Ok(item) => posts.push(Self::convert_from_bson(item).await.unwrap()),
                Err(_) => unimplemented!("There was an error in the docs cursor. find_all")
            }
        }

        Ok(posts)
    }

    async fn convert_from_bson(doc: Document) -> Result<Self, ()> {
        match from_bson::<NewsDocument>(Bson::Document(doc)) {
            Ok(item) => Ok(item),
            Err(_) => Err(())
        }
    }
}