#[derive(Serialize, Deserialize, Clone)]
pub enum Roles {
    User,
    Supporter,
    VIP,
    Contributor,
    WorkApprover,
    ChatModerator,
    Moderator,
    Admin
}