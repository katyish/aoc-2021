const fs = require("fs");
const path = require("path");

class Accumulator {
  constructor(instructions) {
    this.instructionList = instructions;
    this.horiz = 0;
    this.vert = 0;
  }

  followInstruction = (line) => {
    let [operation, value] = line.split(/\s/);
    value = parseInt(value);
    switch (operation) {
      case "forward":
        this.horiz += value;
        break;
      case "up":
        this.vert -= value;
        break;
      case "down":
        this.vert += value;
        break;
      default:
        console.log(`invalid operation ${operation}`);
        break;
    }
    this.line++
  };

  run = () => {
    this.instructionList.forEach(line => {
      this.followInstruction(line)
    });
    console.log(`program complete: horiz: ${this.horiz}, vert: ${this.vert}`)
    return(this.horiz * this.vert) // we want the product

  };
}


const directions = fs
  .readFileSync(path.join(__dirname, "..", "data", "day2.txt"), "utf-8")
  .trim()
  .split("\n")

  const acc = new Accumulator(directions);

  console.log(acc.run(directions))