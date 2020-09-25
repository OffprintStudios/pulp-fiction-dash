use std::env;
use std::path::Path;
use std::process::Command;

fn main() {
    println!("cargo:rerun-if-changed=client/");
    let out_dir = "../static";
    let dest_path = Path::new(&out_dir);
    let output = Command::new("wasm-pack")
        .args(&[
            "build",
            "--target",
            "web",
            "--out-name",
            "wasm",
            "--out-dir",
        ])
        .arg(&dest_path)
        .arg("./client/")
        .output()
        .expect("To build wasm files successfully");

    if !output.status.success() {
        panic!(
            "Error while compiling:\n{}",
            String::from_utf8_lossy(&output.stdout)
        );
    }

    
    let js_file = dest_path.join("wasm.js");
    let wasm_file = dest_path.join("wasm_bg.wasm");

    // We'll add this back once it's fixed
    /*for file in &[&js_file, &wasm_file] {
        let file = std::fs::metadata(file).expect("file to exist");
        assert!(file.is_file());
    }*/

    println!("cargo:rustc-env=PROJECT_NAME_JS={}", js_file.display());
    println!(
        "cargo:rustc-env=PROJECT_NAME_WASM={}",
        wasm_file.display()
    );
}