#[derive(Serialize, Deserialize, Clone)]
pub enum NewsCategory {
    #[serde(rename="Site News")]
    SiteNews,
    Contests,
    Reviews,
    Perspectives
}