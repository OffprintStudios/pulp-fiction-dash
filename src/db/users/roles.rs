#[derive(Serialize, Deserialize, Clone, PartialEq)]
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