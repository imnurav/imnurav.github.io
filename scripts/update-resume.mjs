#!/usr/bin/env node

/**
 * CLI script to update the portfolio resume URL.
 *
 * Usage:
 *   node scripts/update-resume.mjs "https://drive.google.com/..."
 *   node scripts/update-resume.mjs "https://drive.google.com/..." --local-only
 *
 * If GITHUB_TOKEN is configured in environment / .env, it commits directly
 * to GitHub repository via GitHub REST API (triggering GitHub Pages build).
 * Otherwise (or with --local-only), it updates the local src/lib/data/resume.json file.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const RESUME_JSON_PATH = path.join(
  ROOT_DIR,
  "src",
  "lib",
  "data",
  "resume.json",
);

// Helper: Load .env / .env.local if present
function loadEnv() {
  for (const envFile of [".env.local", ".env"]) {
    const fullPath = path.join(ROOT_DIR, envFile);
    if (fs.existsSync(fullPath)) {
      try {
        const content = fs.readFileSync(fullPath, "utf-8");
        for (const line of content.split("\n")) {
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith("#")) continue;
          const eqIdx = trimmed.indexOf("=");
          if (eqIdx !== -1) {
            const key = trimmed.slice(0, eqIdx).trim();
            const val = trimmed
              .slice(eqIdx + 1)
              .trim()
              .replace(/^["']|["']$/g, "");
            if (!process.env[key]) {
              process.env[key] = val;
            }
          }
        }
      } catch (err) {
        console.warn(`[WARN] Failed to parse ${envFile}:`, err.message);
      }
    }
  }
}

loadEnv();

const args = process.argv.slice(2);
const isLocalOnly = args.includes("--local-only");
const urlArg = args.find((arg) => !arg.startsWith("--"));

if (!urlArg) {
  console.error("Error: Please provide a new resume URL.");
  console.error(
    "Usage: node scripts/update-resume.mjs <new-url> [--local-only]",
  );
  process.exit(1);
}

// Validate URL
let validatedUrl;
try {
  const parsed = new URL(urlArg);
  if (!["http:", "https:"].includes(parsed.protocol)) {
    throw new Error("Protocol must be http: or https:");
  }
  validatedUrl = parsed.toString();
} catch (err) {
  console.error(`Invalid URL "${urlArg}": ${err.message}`);
  process.exit(1);
}

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO || "imnurav/imnurav.github.io";
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main";
const FILE_PATH_IN_REPO = "src/lib/data/resume.json";

async function updateViaGitHubApi(newUrl) {
  console.log(
    `Updating resume URL on GitHub repo ${GITHUB_REPO} (${GITHUB_BRANCH})...`,
  );

  const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "resume-updater-cli",
  };

  // 1. Fetch current file sha
  const getUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${FILE_PATH_IN_REPO}?ref=${encodeURIComponent(GITHUB_BRANCH)}`;
  const getRes = await fetch(getUrl, { headers });

  let sha;
  if (getRes.status === 200) {
    const data = await getRes.json();
    sha = data.sha;
  } else if (getRes.status === 404) {
    console.log("Remote file does not exist yet; will create a new file.");
  } else {
    const errorText = await getRes.text();
    throw new Error(
      `Failed to check remote file (HTTP ${getRes.status}): ${errorText}`,
    );
  }

  // 2. Prepare payload
  const newContent =
    JSON.stringify(
      {
        resumeUrl: newUrl,
        updatedAt: new Date().toISOString(),
      },
      null,
      2,
    ) + "\n";

  const putUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${FILE_PATH_IN_REPO}`;
  const putRes = await fetch(putUrl, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: `chore(resume): update resume url to ${newUrl}`,
      content: Buffer.from(newContent, "utf-8").toString("base64"),
      branch: GITHUB_BRANCH,
      ...(sha ? { sha } : {}),
    }),
  });

  if (!putRes.ok) {
    const errorText = await putRes.text();
    throw new Error(
      `GitHub API update failed (HTTP ${putRes.status}): ${errorText}`,
    );
  }

  const putData = await putRes.json();
  console.log("GitHub repository updated successfully!");
  console.log(`Commit: ${putData.commit?.sha || "ok"}`);
  console.log("GitHub Pages deployment will automatically trigger.");
}

function updateLocalFile(newUrl) {
  const content =
    JSON.stringify(
      {
        resumeUrl: newUrl,
        updatedAt: new Date().toISOString(),
      },
      null,
      2,
    ) + "\n";

  fs.mkdirSync(path.dirname(RESUME_JSON_PATH), { recursive: true });
  fs.writeFileSync(RESUME_JSON_PATH, content, "utf-8");
  console.log(`Local file updated: ${RESUME_JSON_PATH}`);
}

async function main() {
  try {
    if (GITHUB_TOKEN && !isLocalOnly) {
      await updateViaGitHubApi(validatedUrl);
      // Keep local in sync if file exists
      if (fs.existsSync(RESUME_JSON_PATH)) {
        updateLocalFile(validatedUrl);
      }
    } else {
      updateLocalFile(validatedUrl);
      if (!isLocalOnly && !GITHUB_TOKEN) {
        console.log(
          "Note: GITHUB_TOKEN not found in environment; only local file was updated.",
        );
        console.log(
          "Set GITHUB_TOKEN in .env to allow remote auto-commit and deployment.",
        );
      }
    }
  } catch (err) {
    console.error("Error updating resume URL:", err.message);
    process.exit(1);
  }
}

main();
