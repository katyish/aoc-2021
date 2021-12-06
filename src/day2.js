const fs = require("fs");
const path = require("path");

class Accumulator {
  constructor(instructions) {
    this.instructionList = instructions;
    this.horiz = 0;
    this.vert = 0;
    this.aim = 0;
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
    this.line++;
  };

  followInstructionPart2 = (line) => {
    let [operation, value] = line.split(/\s/);
    value = parseInt(value);
    switch (operation) {
      case "forward":
        this.horiz += value;
        this.vert += value * this.aim
        break;
      case "up":
        this.aim -= value;
        break;
      case "down":
        this.aim += value;
        break;
      default:
        console.log(`invalid operation ${operation}`);
        break;
    }
    this.line++;
  };

  run1 = () => {
    this.instructionList.forEach((line) => {
      this.followInstruction(line);
    });
    console.log(`program complete: horiz: ${this.horiz}, vert: ${this.vert}`);
    return this.horiz * this.vert; // we want the product
  };

  run2 = () => {
    this.instructionList.forEach((line) => {
      this.followInstructionPart2(line);
    });
    console.log(`program complete: horiz: ${this.horiz}, vert: ${this.aim}`);
    return this.horiz * this.vert;
  };
}


const directions = fs
  .readFileSync(path.join(__dirname, "..", "data", "day2.txt"), "utf-8")
  .trim()
  .split("\n")

  const acc = new Accumulator(directions);

  //console.log(acc.run1(directions));
  console.log(acc.run2(directions));