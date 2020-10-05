pub mod news_document;
pub mod news_category;

pub use news_document::{NewsDocument, NewsAudit};
pub use news_category::NewsCategory;

use mongodb::Database;
use mongodb::bson::{
    doc, DateTime, Bson, from_bson, ser::to_document, Document
};
use chrono::Utc;
use nanoid::nanoid;

use crate::db::DocumentMethods;

impl NewsDocument {
    pub fn new(user_id: String, title: String, desc: String, body: String, category: NewsCategory) -> Self {
        let news_id = nanoid!(10);
        
        let audit = NewsAudit {
            featured: false,
            category: category,
            published: false,
            published_on: None
        };

        NewsDocument {
            _id: news_id,
            user_id: user_id,
            title: title,
            desc: desc,
            body: body,
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
            Err(_) => unimplemented!("Problem converting ")
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

    async fn convert_from_bson(doc: Document) -> Result<Self, ()> {
        match from_bson::<NewsDocument>(Bson::Document(doc)) {
            Ok(item) => Ok(item),
            Err(_) => Err(())
        }
    }
}