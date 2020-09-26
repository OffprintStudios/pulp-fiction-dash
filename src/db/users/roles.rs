#[derive(Serialize, Deserialize)]
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