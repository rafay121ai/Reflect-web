#!/usr/bin/env node
/**
 * Reads .env and generates config.js for the landing page.
 * Run: node scripts/generate-config.js
 * Requires: npm install dotenv (or use .env manually)
 */

const fs = require("fs");
const path = require("path");

const envPath = path.join(__dirname, "..", ".env");
const configPath = path.join(__dirname, "..", "config.js");

let url = process.env.SUPABASE_URL || "";
let key = process.env.SUPABASE_ANON_KEY || "";

try {
  const envContent = fs.readFileSync(envPath, "utf8");
  envContent.split("\n").forEach((line) => {
    const [k, ...vParts] = line.split("=");
    if (!k) return;
    const v = vParts.join("=").replace(/^["']|["']$/g, "").trim();
    if (k.trim() === "SUPABASE_URL") url = v;
    if (k.trim() === "SUPABASE_ANON_KEY") key = v;
  });
} catch (_) {
  console.warn("No .env found; using existing env vars or placeholders.");
}

const content = `// Generated — do not edit. Source: .env
window.SUPABASE_URL = "${url}";
window.SUPABASE_ANON_KEY = "${key}";
`;

fs.writeFileSync(configPath, content);
console.log("config.js generated.");
if (!url || !key) console.warn("Warning: SUPABASE_URL or SUPABASE_ANON_KEY may be empty.");
console.log("Add config.js to .gitignore if not already.");
