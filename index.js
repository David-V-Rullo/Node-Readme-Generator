// TODO: Include packages needed for this application
// const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "github",
    message: "What's your Github username?"
},
{
    type: "input",
    name: "email",
    message: "What's your email?"
},
{
    type: "input",
    name: "title",
    message: "What's the name of your project?"
},
{
    type: "input",
    name: "description",
    message: "Describe your project:"
},
{
    type: "list",
    name: "license",
    message: "Which of the following licenses does your project have?",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2" ,"BSD3", "None"]
},
{
    type: "input",
    name: "dependencies",
    message: "List any dependencies to install?",
    default: "npm i"
},
{
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test"
},
{
    type: "input",
    name: "usage",
    message: "What does the usage of this repo?",
},
{
    type: "input",
    name: "contributors",
    message: "Who are the contributors of this repo?",
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
const cwd = process.cwd
console.log(`${process.cwd()}`)
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
