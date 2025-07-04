import fs from "node:fs";
import path from "node:path";

export function getDependencies(): string[] {
  const pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

  const dependencies = Object.keys(pkg.dependencies || {});

  return dependencies;
}

export function scanSourceFiles(dir: string): string {
  let code = "";

  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      code += scanSourceFiles(fullPath);
    } else if (fullPath.endsWith(".ts") || fullPath.endsWith(".js")) {
      code += fs.readFileSync(fullPath, "utf-8");
    }
  }

  return code;
}

export function runChecker(): void {
  const dependencies = getDependencies();
  const code = scanSourceFiles("./src");

  const unused = dependencies.filter((dep) => !code.includes(dep));

  console.log("\n🔍 Unused Dependencies:\n");
  if (unused.length === 0) {
    console.log("✅ No unused dependencies found!");
  } else {
    for (const dep of unused) {
      console.log(`❌ ${dep}`);
    }
  }
}
