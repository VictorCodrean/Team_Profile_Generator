// inquirer to be able to get user answers to prompts
const inquirer = require("inquirer")

//  WHEN I start the application
//  THEN I am prompted to enter the team manager’s name, employee ID
//  email address, and office number.

const managerInfo = [
    {
        type: "confirm",
        message: "Answer following questions about manager's info",
        name: "hzzz",
        default: true
    },

    {
        type: "input",
        message: "Manager's first name?",
        name: "managerName"
    },

    {
        type: "input",
        message: "The manager ID?",
        name: "managerID"
    },

    {
        type: "input",
        message: "Manager's email address?",
        name: "managerEmail"
    },

    {
        type: "input",
        message: "And the manager's office number?",
        name: "managerOfficeNumber"
    }
]


const newTeamMember =
{
    type: "list",
    name: "teamMember",
    message: "Now, select a team member that needs to be added",
    choices: ["Manager", "Engineer", "Intern", "None"]
}


function startApp() {
    console.log("As application started, introduce Manager's info first")
    inquirer
        .prompt(managerInfo)
        .then(response => {
            console.log(`Manager's name: ${response.managerName}`)
            console.log(`ID No: ${response.managerID}`)
            console.log(`Email address: ${response.managerEmail}`)
            console.log(`Office Number: ${response.managerOfficeNumber}`)
            addMember(response)
        })
}

function addMember(response) {
    inquirer
        .prompt(newTeamMember)
        .then(answer => {
            switch (answer.teamMember) {
                case "Manager": ;
                case "Engineer": ;
                case "Intern": ;
                case "None": ;
            }
            console.log(answer.teamMember)
        })
}

startApp();

