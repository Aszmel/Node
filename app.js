// const fs = require("fs");
const chalk = require("chalk");

// fs.writeFileSync("notes.txt", "File created by node JS");
// fs.appendFileSync("notes.txt", "This line is added by appendFileSync");
console.log(chalk.red.bgYellow.bold("Arkadiusz Szymczak & Lena Szymczak"));
console.log(chalk.green.bgBlue.bold("Hello in Node Course"));
console.log(process.argv);

const command = process.argv[2];

if (command === "hello") {
  console.log("Hello my friend, your laptop greets you!");
} else if (command === "name") {
  console.log("My name is Asus r510j");
}
