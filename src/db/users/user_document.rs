use crate::db::users::{roles::Roles, audit_session::AuditSession};

use mongodb::bson::DateTime;

#[derive(Serialize, Deserialize, Clone)]
pub struct UserDocument {
    pub _id: String,
    pub email: String,
    pub username: String,
    pub password: String,
    #[serde(rename="agreedToPolicies")]
    pub agreed_to_policies: bool,
    pub profile: UserProfile,
    pub stats: UserStats,
    pub audit: UserAudit,
    #[serde(rename="createdAt")]
    pub created_at: DateTime,
    #[serde(rename="updatedAt")]
    pub updated_at: DateTime
}

#[derive(Serialize, Deserialize, Clone)]
pub struct UserProfile {
    pub avatar: String,
    #[serde(rename="themePref")]
    pub theme_pref: String,
    pub bio: Option<String>,
    pub tagline: Option<String>
}

#[derive(Serialize, Deserialize, Clone)]
pub struct UserStats {
    pub works: i32,
    pub blogs: i32,
    pub watchers: i32,
    pub watching: i32
}

#[derive(Serialize, Deserialize, Clone)]
pub struct UserAudit {
    pub roles: Vec<Roles>,
    pub sessions: Option<Vec<AuditSession>>,
    #[serde(rename="termsAgree")]
    pub terms_agree: bool,
    #[serde(rename="emailConfirmed")]
    pub email_confirmed: bool,
    #[serde(rename="isDeleted")]
    pub is_deleted: bool
}