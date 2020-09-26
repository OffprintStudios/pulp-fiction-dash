//! # Database
//! 
//! TODO: Add more documentation

pub mod users;

use rocket::State;
use rocket::request::{self, Request, FromRequest, Outcome};
use mongodb::{Client, Database};

#[derive(Debug)]
pub struct PulpDb(pub Database);

pub async fn init_pulp_db() -> Database {
    println!("Connecting to the Pulp Fiction Database...");
    let db = match Client::with_uri_str(dotenv!("DATABASE_URL")).await {
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