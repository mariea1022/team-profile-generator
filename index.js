const inquirer = require("inquirer");

const fs = require("fs");

let generateTeamProfile = require("./generateTeamProfile");

const questions = [
    {
        type: "input",
        message: "Enter team manager's name:",
        name: "teamManagerName",
    },
    {
        type: "input",
        message: "Enter team manager's employee ID:",
        name: "teamManagerID",
    },
    {
        type: "input",
        message: "Enter team manager's email's address:",
        name: "teamManagerEmail",
    },
    {
        type: "input",
        message: "Enter team manager's office number:",
        name: "teamManagerOfficeNumber",
    }
];

function init() {
    inquirer.prompt(questions).then((answers) => {
        let generatedString = generateTeamProfile(answers)
        fs.writeFile('index.html', generatedString, (err) =>
        err ? console.error(err) : console.log("index.html generated successfully!"))
    })
}

init()