const inquirer = require("inquirer");

const fs = require("fs");

const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

let generateTeamProfile = require("./generateTeamProfile");

const managerQuestions = [
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

const mainQuestions = [
    {
        type: "list",
        message: "What do you want to do next?",
        choices: ["add an engineer", "add an intern", "finish building my team"],
        name: "action"
    }
]

const engineerQuestions = [
    {
        type: "input",
        message: "Enter eningeer's name:",
        name: "engineerName",
    },
    {
        type: "input",
        message: "Enter engineer's ID:",
        name: "engineerID",
    },
    {
        type: "input",
        message: "Enter engineer's email's address:",
        name: "engineerEmail",
    },
    {
        type: "input",
        message: "Enter engineer's GitHub:",
        name: "engineerGitHub",
    }
]

const internQuestions = [
    {
        type: "input",
        message: "Enter intern's name:",
        name: "internName",
    },
    {
        type: "input",
        message: "Enter intern's ID:",
        name: "internID",
    },
    {
        type: "input",
        message: "Enter intern's email's address:",
        name: "internEmail",
    },
    {
        type: "input",
        message: "Enter intern's School:",
        name: "internSchool",
    }
]

let employees = [

]

function init() {
    inquirer.prompt(managerQuestions).then((answers) => {
        let employee = new Manager(answers.teamManagerName, answers.teamManagerId, answers.teamManagerEmail, answers.teamManagerOfficeNumber);
        employees.push(employee);

        inquirer.prompt(mainQuestions).then((answers) => {
            if (answers.action === "add an engineer") {
                let employee = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
                employees.push(employee);
                console.log(employees);
                console.log("add an engineer 1");
            } else if (answers.action === "add an intern") {
                console.log("add an intern 1")
            } else if (answers.action === "finish building my team") {
                console.log("finished") }
        })

        // let generatedString = generateTeamProfile(answers)
        // fs.writeFile('index.html', generatedString, (err) =>
        // err ? console.error(err) : console.log("index.html generated successfully!"))
    })
}

init()