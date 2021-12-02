const fs = require("fs");
const path = require("path");

const depths = fs
  .readFileSync(path.join(__dirname, "..", "data", "day1.txt"), "utf-8")
  .trim()
  .split("\n")
  .map((depth) => +depth.trim());

// count the number of times a depth measurement increases from the previous measurement.
let count = 0;

for (let i = 1; i < depths.length; i++) {
  if (depths[i] > depths[i - 1]) {
    count++;
  }
}

console.log(count);
