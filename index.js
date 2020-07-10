// https://www.npmjs.com/package/inquirer


const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js")

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project."
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation requirements for this project?"
        },
        {
            type: "input",
            name: "usage",
            message: "Enter usage information. This section provides ready-to-use samples of code to speed up the process for people using this code."
        },
        {
            type: "input",
            name: "license",
            message: "Enter a short description about the license."
        },
        {
            type: "input",
            name: "contributions",
            message: "Enter contributing requirements - what kind of contributions are allowed to this project?"
        },
        {
            type: "input",
            name: "github",
            message: "Enter your github username"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email"
        },
    ]);
}





promptUser()
    .then(function (answers) {
        const markdown = generateMarkdown(answers);

        return writeFileAsync("index.md", markdown);
    })
    .then(function () {
        console.log("Successfully wrote to index.md");
    })
    .catch(function (err) {
        console.log(err);
    });
