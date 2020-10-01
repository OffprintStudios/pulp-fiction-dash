//! # Users
//! 
//! TODO: Add documention

pub mod user_document;
pub mod roles;
pub mod audit_session;

use mongodb::Database;
use mongodb::options::{FindOneAndUpdateOptions, ReturnDocument};
use mongodb::bson::{doc, from_bson, Bson};
use chrono::{DateTime, Utc, Duration};
use argonautica::Verifier;
use easy_hasher::easy_hasher::sha256;

use user_document::UserDocument;

impl UserDocument {
    /// Verifies a password.
    async fn verify_password(&self, password_to_check: &str) -> bool {
        let password_hash = self.password.clone();
        let mut verifier = Verifier::default();
        match verifier.with_hash(password_hash).with_password(password_to_check).verify() {
            Ok(true) => true,
            Ok(false) => false,
            Err(e) => unimplemented!("{}", e)
        }
    }

    /// Finds a user by their email. If found, returns the user document.
    /// 
    /// Otherwise, returns `None`.
    pub async fn find_one_by_email(db: Database, potential_email: String) -> Option<UserDocument> {
        let coll = db.collection("users");
        let find_one_doc = doc!{"email": &potential_email, "audit.isDeleted": false};
        
        match coll.find_one(find_one_doc, None).await {
            Ok(doc) => {
                match doc {
                    Some(user) => {
                        let user_doc = from_bson::<UserDocument>(Bson::Document(user)).unwrap();
                        Some(user_doc)
                    },
                    None => None
                }
            },
            Err(e) => unimplemented!("{}", e) // we should handle mongodb errors gracefully
        }
    }

    /// Adds a new refresh session ID to the user's sessions array on their document.
    pub async fn add_refresh_token(db: Database, user_id: String, session_id: String) -> Option<audit_session::AuditSession> {
        let coll = db.collection("users");

        let hashed_session_id = sha256(&session_id).to_hex_string();
        let now: DateTime<Utc> = Utc::now();
        let find_options = FindOneAndUpdateOptions::builder().return_document(ReturnDocument::After).build();

        let updated_value = match coll.find_one_and_update(doc!{"_id": user_id}, 
            doc!{"$push": {"audit.sessions": {"_id": &hashed_session_id, "createdAt": now, "expires": now + Duration::seconds(2592000000)}}}, 
            Some(find_options)).await {
                Ok(doc) => doc,
                Err(e) => unimplemented!("{}", e) // we should handle mongodb errors gracefully
        };

        match updated_value {
            Some(doc) => {
                let user: UserDocument = from_bson::<UserDocument>(Bson::Document(doc)).unwrap();
                let this_session = match user.audit.sessions {
                    Some(s) => s.into_iter().find(|sess| sess._id == hashed_session_id),
                    None => return None
                };

                return this_session;
            },
            None => None
        }
    }

    pub async fn login(db: Database, email: String, password: String) -> Option<UserDocument> {
        let potential_user = UserDocument::find_one_by_email(db.clone(), email.clone()).await;
        let matched_user = match potential_user {
            Some(user) => user,
            None => unimplemented!("No user found!")
        };

        match matched_user.verify_password(&password).await {
            true => Some(matched_user),
            false => None
        }
    }
}