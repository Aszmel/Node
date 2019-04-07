// const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");

// fs.writeFileSync("notes.txt", "File created by node JS");
// fs.appendFileSync("notes.txt", "This line is added by appendFileSync");
// console.log(chalk.red.bgYellow.bold("Arkadiusz Szymczak & Lena Szymczak"));
// console.log(chalk.green.bgBlue.bold("Hello in Node Course"));

console.log(process.argv);
console.log(yargs.argv);

//useful nodes to have: add, remove, read, list
//add
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function() {
    console.log("adding new note");
  }
});

//remove
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function() {
    console.log("removing note");
  }
});

//read
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function() {
    console.log("reading note");
  }
});

//list
yargs.command({
  command: "list",
  describe: "Listing a note",
  handler: function() {
    console.log("listing note");
  }
});
