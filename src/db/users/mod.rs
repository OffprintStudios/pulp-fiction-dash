//! # Users
//! 
//! TODO: Add documention

pub mod user_document;
pub mod roles;
pub mod audit_session;

use crate::api::auth::models::jwt_payload::JwtPayload;

use rocket::State;
use rocket::http::Status;
use rocket::request::{self, Request, FromRequest, Outcome};

use mongodb::Database;
use mongodb::bson::{doc, from_bson, Bson};
use chrono::{DateTime, Utc, Duration};
use argonautica::Verifier;
use easy_hasher::easy_hasher::sha256;
use jsonwebtoken::errors::ErrorKind;
use jsonwebtoken::{decode, Validation, DecodingKey};
use array_tool::vec::*;

use user_document::UserDocument;

#[derive(Serialize, Deserialize)]
pub struct RefreshUser(pub UserDocument);

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

    /// Finds a user by their ID.
    pub async fn find_one_by_id(db: Database, user_id: String) -> Option<UserDocument> {
        let coll = db.collection("users");
        let find_one_doc = doc!{"_id": &user_id};

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
            Err(e) => unimplemented!("{}", e)
        }
    }

    /// Adds a new refresh session ID to the user's sessions array on their document.
    pub async fn add_refresh_token(&self, db: Database, session_id: String) -> Result<(), mongodb::error::Error> {
        let coll = db.collection("users");

        let hashed_session_id = sha256(&session_id).to_hex_string();
        let now: DateTime<Utc> = Utc::now();

        match coll.update_one(doc!{"_id": self._id.clone()}, 
            doc!{"$push": {"audit.sessions": {"_id": &hashed_session_id, "createdAt": now, "expires": now + Duration::seconds(2628000)}}, "$set": {"updatedAt": Utc::now()}}, 
            None).await {
                Ok(_doc) => Ok(()),
                Err(e) => Err(e) // we should handle mongodb errors gracefully
        }
    }

    /// Removes the given session ID from a user's sessions array on their document.
    pub async fn clear_refresh_token(&self, db: Database, session_id: String) -> Result<(), mongodb::error::Error> {
        let coll = db.collection("users");
        let hashed_session_id = sha256(&session_id).to_hex_string();

        match coll.update_one(doc!{"_id": self._id.clone()}, doc!{"$pull": {"audit.sessions": {"_id": hashed_session_id}}, "$set": {"updatedAt": Utc::now()}}, None).await {
            Ok(_res) => Ok(()),
            Err(e) => Err(e)
        }
    }

    /// Determines if the supposed refresh token matches a valid session ID 
    /// in the user's document. If yes, then it returns true. Otherwise, 
    /// returns false.
    pub async fn check_refresh_token(db: Database, user_id: String, session_id: String) -> Result<bool, mongodb::error::Error> {
        let coll = db.collection("users");
        let hashed_session_id = sha256(&session_id).to_hex_string();

        let valid_user = match coll.find_one(doc!{"_id": user_id, "audit.sessions._id": hashed_session_id}, None).await {
            Ok(doc) => doc,
            Err(e) => return Err(e)
        };

        match valid_user {
            Some(_user) => Ok(true),
            None => Ok(false)
        }
    }

    /// Logs a user in.
    pub async fn login(db: Database, email: String, password: String) -> Result<Option<UserDocument>, String> {
        let potential_user = UserDocument::find_one_by_email(db.clone(), email.clone()).await;

        let matched_user = match potential_user {
            Some(user) => user,
            None => unimplemented!("No user found!")
        };

        let role_intersect = matched_user.audit.roles.intersect(vec![
            roles::Roles::Admin, 
            roles::Roles::Moderator, 
            roles::Roles::Contributor,
            roles::Roles::WorkApprover
        ]);

        if role_intersect.len() > 0 {
            match matched_user.verify_password(&password).await {
                true => Ok(Some(matched_user)),
                false => Ok(None)
            }
        } else {
            Err("You don't have permission to access the dashboard.".to_string())
        }
    }

    /// Gets a user from a JSON web token.
    pub async fn get_user_from_token(db: Database, token: &str, refresh: bool) -> Result<UserDocument, String> {
        let coll = db.collection("users");
        let secret = dotenv!("JWT_SECRET");

        if refresh == false {
            let validation = Validation {leeway: 60, ..Validation::default()};
            let token_data = match decode::<JwtPayload>(token, &DecodingKey::from_secret(secret.as_bytes()), &validation) {
                Ok(data) => data,
                Err(err) => match *err.kind() {
                    ErrorKind::InvalidToken => return Err("Invalid token.".to_string()),
                    ErrorKind::InvalidIssuer => return Err("Issuer is invalid".to_string()),
                    ErrorKind::ExpiredSignature => return Err("Expired Signature".to_string()),
                    _ => return Err("An unknown error occurred.".to_string())
                }
            };
    
            match coll.find_one(doc!{"_id": token_data.claims.get_id()}, None).await {
                Ok(doc) => {
                    match doc {
                        Some(user) => {
                            let user_doc = from_bson::<UserDocument>(Bson::Document(user)).unwrap();
                            Ok(user_doc)
                        },
                        None => Err("User not found".to_string())
                    }
                },
                Err(e) => unimplemented!("{}", e) 
            }
        } else {
            let validation = Validation {leeway: 60, validate_exp: false, ..Validation::default()};
            let token_data = match decode::<JwtPayload>(token, &DecodingKey::from_secret(secret.as_bytes()), &validation) {
                Ok(data) => data,
                Err(err) => match *err.kind() {
                    ErrorKind::InvalidToken => return Err("Invalid token.".to_string()),
                    ErrorKind::InvalidIssuer => return Err("Issuer is invalid".to_string()),
                    _ => return Err("An unknown error occurred.".to_string())
                }
            };

            match coll.find_one(doc!{"_id": token_data.claims.get_id()}, None).await {
                Ok(doc) => {
                    match doc {
                        Some(user) => {
                            let user_doc = from_bson::<UserDocument>(Bson::Document(user)).unwrap();
                            Ok(user_doc)
                        },
                        None => Err("User not found".to_string())
                    }
                },
                Err(e) => unimplemented!("{}", e) 
            }
        }
    }
}

#[rocket::async_trait]
impl<'a, 'r> FromRequest<'a, 'r> for UserDocument {
    type Error = ();

    async fn from_request(request: &'a Request<'r>) -> request::Outcome<Self, Self::Error> {
        let conn = rocket::try_outcome!(request.guard::<State<Database>>().await);
        let keys: Vec<_> = request.headers().get("Authorization").collect();
        if keys.len() != 1 {
            return Outcome::Failure((Status::BadRequest, ()));
        }

        let token = keys[0].replace("Bearer ", "");
        let user = match UserDocument::get_user_from_token(conn.clone(), &token, false).await {
            Ok(user) => user,
            Err(_) => return Outcome::Failure((Status::Unauthorized, ()))
        };

        let role_intersect = user.audit.roles.intersect(vec![
            roles::Roles::Admin, 
            roles::Roles::Moderator, 
            roles::Roles::Contributor,
            roles::Roles::WorkApprover
        ]);

        if role_intersect.len() > 0 {
            Outcome::Success(user)
        } else {
            Outcome::Failure((Status::Unauthorized, ()))
        }
    }
}

#[rocket::async_trait]
impl<'a, 'r> FromRequest<'a, 'r> for RefreshUser {
    type Error = ();

    async fn from_request(request: &'a Request<'r>) -> request::Outcome<Self, Self::Error> {
        let conn = rocket::try_outcome!(request.guard::<State<Database>>().await);
        let keys: Vec<_> = request.headers().get("Authorization").collect();
        if keys.len() != 1 {
            return Outcome::Failure((Status::BadRequest, ()));
        }

        let token = keys[0].replace("Bearer ", "");
        let user = match UserDocument::get_user_from_token(conn.clone(), &token, true).await {
            Ok(user) => user,
            Err(_) => return Outcome::Failure((Status::Unauthorized, ()))
        };

        let role_intersect = user.audit.roles.intersect(vec![
            roles::Roles::Admin, 
            roles::Roles::Moderator, 
            roles::Roles::Contributor,
            roles::Roles::WorkApprover
        ]);

        if role_intersect.len() > 0 {
            Outcome::Success(RefreshUser(user))
        } else {
            Outcome::Failure((Status::Unauthorized, ()))
        }
    }
}