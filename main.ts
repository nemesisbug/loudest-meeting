// The One-Line Laugh — make.fun bounty u-ronigrv-the-one-line-laugh-7ccca46f
// Writes one funny line (a single sentence, at most 200 characters) to
// /output/entry.txt. Runs on Node 22 with no dependencies and no network.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I bought noise-cancelling headphones to escape the office noise, and now I can hear my own thoughts, which turn out to be the loudest meeting of the day.";

// The gate requires 1–200 characters, a single sentence, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
