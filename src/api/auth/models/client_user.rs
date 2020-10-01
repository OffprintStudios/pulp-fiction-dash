use crate::db::users::user_document::{UserDocument, UserProfile, UserStats};
use crate::db::users::roles::Roles;

use mongodb::bson::DateTime;

#[derive(Serialize, Deserialize)]
#[serde(rename_all="camelCase")]
pub struct ClientUser {
    _id: String,
    email: String,
    username: String, 
    agreed_to_policies: bool,
    profile: UserProfile,
    stats: UserStats,
    roles: Vec<Roles>,
    created_at: DateTime,
    token: Option<String>
}

impl ClientUser {
    pub async fn generate(user: UserDocument, token: Option<String>) -> Self {
        ClientUser {
            _id: user._id,
            email: user.email,
            username: user.username,
            agreed_to_policies: user.agreed_to_policies,
            profile: user.profile,
            stats: user.stats,
            roles: user.audit.roles,
            created_at: user.created_at,
            token: token
        }
    }
}