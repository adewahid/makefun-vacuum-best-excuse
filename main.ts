// The Robot Vacuum's Best Excuse
// make.fun competition: u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214
// Writes one line (<= 140 chars): the funniest excuse a robot vacuum gives
// for missing a spot, to /output/entry.txt. The gate requires 1-140 UTF-8
// characters, not only whitespace. The line is the vacuum speaking for
// itself, in first person, rooted in its own world: dust, no-go zones, dock.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The dust bunny unionised. I negotiated a no-go zone and went back to my dock before things got violent.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`chars: ${LINE.length}`);
