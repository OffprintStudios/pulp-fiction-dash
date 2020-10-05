//! # Database
//! 
//! TODO: Add more documentation

pub mod users;
pub mod queue;
pub mod news;

use rocket::State;
use rocket::request::{self, Request, FromRequest, Outcome};
use mongodb::{Client, options::ClientOptions, Database, bson::Document};

#[derive(Debug)]
pub struct PulpDb(pub Database);

pub async fn init_pulp_db() -> Database {
    println!("Connecting to the Pulp Fiction Database...");
    let client_options = match ClientOptions::parse(dotenv!("DATABASE_URL")).await {
        Ok(client) => client,
        Err(_) => unimplemented!("Could not create connection to client.")
    };

    let db = match Client::with_options(client_options) {
        Ok(conn) => conn.database(dotenv!("DATABASE_NAME")),
        Err(e) => panic!(e)
    };

    println!("Connection successful!");
    return db;
}

#[rocket::async_trait]
impl<'a, 'r> FromRequest<'a, 'r> for PulpDb {
    type Error = ();

    async fn from_request(request: &'a Request<'r>) -> request::Outcome<Self, Self::Error> {
        let conn = rocket::try_outcome!(request.guard::<State<Database>>().await);
        Outcome::Success(PulpDb(conn.clone()))
    }
}

/* Common Traits */
#[rocket::async_trait]
pub trait DocumentMethods {
    /// Saves the document to the database.
    async fn save(&self, db: Database) -> Result<(), ()>;

    /// Finds an item by its ID.
    async fn find_one_by_id(db: Database, item_id: String) -> Option<Self> where Self: Sized;

    /// Converts a document to an item struct.
    async fn convert_from_bson(doc: Document) -> Result<Self, ()> where Self: Sized;
}