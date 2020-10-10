/* Webserver */
use voca_rs::count::count_words;

/// Counts the number of words in a string of HTML.
pub async fn get_wordcount(text: &str) -> i32 {
    count_words(text, "") as i32
}