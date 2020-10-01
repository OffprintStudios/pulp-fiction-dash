use crate::db::users::user_document::UserDocument;
use crate::db::users::roles::Roles;

/* Webserver */
use chrono::prelude::*;

#[derive(Serialize, Deserialize)]
#[serde(rename_all="camelCase")]
pub struct JwtPayload {
    sub: String,
    roles: Vec<Roles>,
    username: String,
    exp: Option<i64>,
    iat: Option<i64>
}

impl JwtPayload {
    pub async fn build_payload(user: &UserDocument) -> Self {
        JwtPayload {
            sub: user._id.clone(),
            roles: user.audit.roles.clone(),
            username: user.username.clone(),
            exp: Some(Utc::now().timestamp() + 3600),
            iat: None
        }
    }

    pub fn get_id(&self) -> String {
        self.sub.clone()
    }
}