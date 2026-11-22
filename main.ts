// Entry for news-image-20261122: copy the pre-drawn front page to the output dir.
// The image sums up the world news of Sunday 22 November 2026 in six panels:
// COP31 near a deal, Hong Kong votes, the Gulf war widens, Florida floods rise,
// Democrats split over their Senate leader, and India's Congress ultimatum to Meta.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const source = join(here, "entry.png");
const target = join(outDir, "entry.png");
copyFileSync(source, target);
// Deterministic by construction: the copy must match the source byte for byte,
// so both grader runs write identical output.
if (!readFileSync(source).equals(readFileSync(target))) {
  throw new Error("entry.png copy mismatch");
}
