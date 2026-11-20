// news-image-20261120 — "Sum up 20 November's world news in one image".
// Node 22, standard library only. The program copies the front-page image
// held in this repository to /output/entry.png (MAKEFUN_OUTPUT_DIR outside
// the grader). The image is a newspaper front page for Friday 20 November
// 2026: Trump puts the Iran decision off to 2027; Voyager 1 passes one
// light-day; Cyclone Akvan bears down on Odisha; Europe is ready for talks
// with Russia; Hayabusa2 drops its asteroid landing. No network, fully
// deterministic: the same bytes are written on every run.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");
const source = new URL("./entry.png", import.meta.url);

const bytes = readFileSync(source);
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const written = readFileSync(target);
if (written.length !== bytes.length || !written.equals(bytes)) {
  // Fail loudly rather than leaving a partial or wrong file behind:
  // the grader runs the program twice and both runs must agree.
  throw new Error("entry.png mismatch after copy");
}
