use std::process::Command;

fn main() {
    println!("cargo:rerun-if-changed=client/");
    let output_deps = Command::new("yarn")
        .args(&["--cwd", "./client", "install"])
        .output()
        .expect("To fetch client dependencies");

    let output_build = Command::new("yarn")
        .args(&["--cwd", "./client", "run", "build", "--prod"])
        .output()
        .expect("To build the client successfully");

    if !output_deps.status.success() {
        panic!("Error while compiling:\n{}", String::from_utf8_lossy(&output_deps.stdout));
    } else if !output_build.status.success() {
        panic!("Error while compiling:\n{}", String::from_utf8_lossy(&output_build.stdout));
    }
}