use std::process::Command;

fn main() {
    let outputDeps = Command::new("yarn")
        .args($["--cwd", "./client", "install"])
        .output()
        .expect("To fetch client dependencies");

    let outputBuild = Command::new("yarn")
        .args(&["--cwd", "./client", "run", "build", "--prod"])
        .output()
        .expect("To build the client successfully");

    if !outputDeps.status.success() && !outputBuild.status.success() {
        panic!("Error while compiling:\n{}", String::from_utf8_lossy(&output.stdout));
    }
}