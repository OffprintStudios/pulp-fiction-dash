//! # Pulp Fiction Dashboard
//! 
//! The Offprint administration and moderation dashboard.
//! 
//! TODO: Add more documentation and dev instructions.

/* Rocket */
#[macro_use] extern crate rocket;
extern crate rocket_contrib;

/* MongoDB */
extern crate async_std;
extern crate futures;
extern crate mongodb;

/* Webserver */
extern crate serde;
extern crate serde_json;
#[macro_use] extern crate serde_derive;
extern crate argon2;
extern crate ammonia;
extern crate voca_rs;
extern crate jsonwebtoken;
extern crate maplit;
extern crate nanoid;

mod api;
mod db;
mod routes;
mod util;

use std::path::{Path, PathBuf};
use rocket::response::NamedFile;
use rocket::response::Debug;
use rocket_contrib::helmet::SpaceHelmet;

#[get("/", rank = 9)]
async fn index() -> Result<NamedFile, Debug<std::io::Error>> {
    match NamedFile::open("static/index.html").await {
        Ok(nf) => Ok(nf),
        Err(e) => Err(Debug::from(e))
    }
}

#[get("/<path..>", rank = 10)]
async fn file_index(path: PathBuf) -> Option<NamedFile> {
    match NamedFile::open(Path::new("static/").join(path)).await {
        Ok(nf) => Some(nf),
        Err(_) => Some(NamedFile::open(Path::new("static/index.html")).await.unwrap())
    }
}

#[launch]
async fn t_minus() -> rocket::Rocket {
    rocket::ignite()
        .mount("/", routes![index, file_index])
        .attach(SpaceHelmet::default())
}
