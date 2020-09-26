use chrono::{DateTime, Utc};

#[derive(Serialize, Deserialize)]
pub struct AuditSession {
    pub _id: String,
    pub expires: DateTime<Utc>,
    #[serde(rename="createdAt")]
    pub created_at: DateTime<Utc>
}