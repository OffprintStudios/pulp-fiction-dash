#[derive(Serialize, Deserialize)]
pub struct LoginUser {
    pub email: String,
    pub password: String
}