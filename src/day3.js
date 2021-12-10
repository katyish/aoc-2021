const fs = require("fs");
const path = require("path");

class Accumulator {
  constructor(readings) {
    this.readingList = readings;
    this.gamma = [];
    this.epsilon = [];
    this.gammaNum = 0;
    this.epsilonNum = 0;
  }

  processColumn = (num) => {
    let one_count = 0;
    let zero_count = 0;
    readings.forEach((line) => {
      if (line[num] == "1") one_count++;
      else zero_count++;
    });

    if (one_count > zero_count) {
      this.gamma[num] = 1;
      this.epsilon[num] = 0;
    } else {
      this.gamma[num] = 0;
      this.epsilon[num] = 1;
    }
  };

  processReadings = () => {
    for (let i = 0; i < this.readingList[i].length; i++) {
      this.processColumn(i);
    }

    this.gammaNum = parseInt(this.gamma.join(""), 2); // array to binary string to int
    this.epsilonNum = parseInt(this.epsilon.join(""), 2); // mmm hacky

    console.log(this.gammaNum * this.epsilonNum); // the 'power consumption'
  };
}

const readings = fs
  .readFileSync(path.join(__dirname, "..", "data", "day3.txt"), "utf-8")
  .trim()
  .split("\n");

const acc = new Accumulator(readings);

acc.processReadings();
