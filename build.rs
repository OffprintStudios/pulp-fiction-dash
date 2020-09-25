use std::process::Command;

fn main() {
    let output = Command::new("yarn")
        .args(&["--cwd", "./client", "run", "build", "--prod"])
        .output()
        .expect("To build the client successfully");

    if !output.status.success() {
        panic!("Error while compiling:\n{}", String::from_utf8_lossy(&output.stdout));
    }
}