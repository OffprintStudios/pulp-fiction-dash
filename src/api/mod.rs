//! # API
//! 
//! Backend routes and functions for the API

/* std */
use std::convert::From;

/* Rocket */
use rocket::http::{ContentType, Status};
use rocket::request::Request;
use rocket::response::{Responder, Response};
use rocket_contrib::json;
use rocket_contrib::json::JsonValue;

/* MongoDB */
use mongodb::error::Error as MongoError;

#[derive(Debug)]
pub struct ApiResponse {
    data: JsonValue,
    status: Status
}

impl ApiResponse {
    pub fn data(mut self, data: JsonValue) -> Self {
        self.data = json!({"data": data});
        self
    }

    pub fn message(mut self, message: &str) -> Self {
        self.data = json!({"message": message});
        self
    }

    pub fn ok() -> Self {
        ApiResponse {
            data: json!(null),
            status: Status::Ok
        }
    }

    pub fn created() -> Self {
        ApiResponse {
            data: json!(null),
            status: Status::Created
        }
    }

    pub fn accepted() -> Self {
        ApiResponse {
            data: json!(null),
            status: Status::Accepted
        }
    }

    pub fn no_content() -> Self {
        ApiResponse {
            data: json!(null),
            status: Status::NoContent
        }
    }

    pub fn bad_request() -> Self {
        ApiResponse {
            data: json!({"message": "Bad Request"}),
            status: Status::BadRequest
        }
    }

    pub fn unauthorized() -> Self {
        ApiResponse {
            data: json!({"message": "Unauthorized"}),
            status: Status::Unauthorized
        }
    }

    pub fn not_found() -> Self {
        ApiResponse {
            data: json!({"message": "Not Found"}),
            status: Status::NotFound
        }
    }

    pub fn method_not_allowed() -> Self {
        ApiResponse {
            data: json!({"message": "Method Not Allowed"}),
            status: Status::MethodNotAllowed
        }
    }

    pub fn conflict() -> Self {
        ApiResponse {
            data: json!({"message": "Conflict"}),
            status: Status::Conflict
        }
    }

    pub fn forbidden() -> Self {
        ApiResponse {
            data: json!({"message": "Forbidden"}),
            status: Status::Forbidden
        }
    }

    pub fn unprocessable_entity(errors: JsonValue) -> Self {
        ApiResponse {
            data: json!({"message": errors}),
            status: Status::UnprocessableEntity
        }
    }

    pub fn internal_server_error() -> Self {
        ApiResponse {
            data: json!({"message": "Internal Server Error"}),
            status: Status::InternalServerError
        }
    }

    pub fn service_unavailable() -> Self {
        ApiResponse {
            data: json!({"message": "Service Unavailable"}),
            status: Status::ServiceUnavailable
        }
    }
}

impl From<MongoError> for ApiResponse {
    fn from(_: MongoError) -> Self {
        ApiResponse::internal_server_error()
    }
}

impl<'r> Responder<'r, 'static> for ApiResponse {
    fn respond_to(self, req: &'r Request<'_>) -> rocket::response::Result<'static> {
        match self.status {
            Status::NoContent => Response::build().status(Status::NoContent).ok(),
            _ => {
                Response::build_from(self.data.respond_to(req)?)
                    .status(self.status).header(ContentType::JSON).ok()
            }
        }
    }
}