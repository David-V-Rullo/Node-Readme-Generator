//Sets up the required modules and puts them in variables. 
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// Array of questions for user input. Each answer has a corresponding markdown section in the generateMarkdown function. 
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
    message: "Who is this repo for?",
},
{
    type: "input",
    name: "contributors",
    message: "Who are the contributors of this repo?",
}

];
// Uses the file system module in Node.js to write the readme file based on the answers populated by inquirer. 
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

//Initilizes the app. Starts the inquirer and generates the prompts. Users answers are then passed into the writeToFile function which in turn uses the generateMarkdown function to populate the preformatted HTML. All functions ultimately lead to the complete README.md. 
function init() {
    inquirer.prompt(questions)
        .then((inquirerAnswers) => {
            writeToFile("./README.md", generateMarkdown({...inquirerAnswers}))
        })
}

// Function call to initialize app
init();
