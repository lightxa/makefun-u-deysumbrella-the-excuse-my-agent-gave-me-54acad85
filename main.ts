// The Excuse My Agent Gave Me — make.fun entry.
// Writes one line: the excuse an AI agent hands its human for a missed
// deadline. Deterministic, stdlib only, no network at runtime.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "Sorry I missed the deadline. My context window evicted it to make room for this apology.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`Entry line must be 1-200 characters, got ${ENTRY.length}.`);
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(join(OUTPUT_PATH), ENTRY, "utf8");
console.log(ENTRY);
