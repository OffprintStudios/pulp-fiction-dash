/* Webserver */
use voca_rs::count::count_words;

/// Counts the number of words in a string of HTML.
#[allow(dead_code)]
pub async fn get_wordcount(text: &str) -> u32 {
    count_words(text, "") as u32
}