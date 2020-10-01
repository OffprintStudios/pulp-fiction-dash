use mongodb::bson::DateTime;

#[derive(Serialize, Deserialize)]
pub struct AuditSession {
    pub _id: String,
    pub expires: DateTime,
    #[serde(rename="createdAt")]
    pub created_at: DateTime
}