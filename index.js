// inquirer to be able to get user answers to prompts
// fs to write file
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./lib/createHTML");
const generateCSS = require("./lib/createCSS")

// Bringing class modules:
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// empty array to bring team members information...
const teamMembers = [];


//  WHEN I start the application
//  THEN I am prompted to enter the team manager’s name, employee ID
//  email address, and office number.
const questions = [
    {
        type: "input",
        message: `Manager's first name: `,
        name: "name"
    },

    {
        type: "input",
        message: "What's your employee ID? ",
        name: "idNumber"
    },

    {
        type: "input",
        message: "Type in the email address: ",
        name: "emailAddress"
    },

    {
        type: "input",
        message: "Enter the office number: ",
        name: "officeNumber"
    },
];


const newTeamMember = [
    // {
    //     type: "confirm",
    //     name: "booleanValue",
    //     message: "Do you need to add another employee?",
    // },

    {
        type: "list",
        name: "teamMember",
        message: "Select a team member that needs to be added",
        choices: ["Engineer", "Intern", "Done"]
    }
];

startApp();
function startApp() {
    console.log("As application started, introduce Manager's info first");
    inquirer
        .prompt(questions)
        .then(response => {
            const managerInfo = new Manager(response.name, response.idNumber, response.emailAddress, response.officeNumber);
            teamMembers.push(managerInfo);
            addMember();
        });
};

// WHEN I enter the team manager’s name, employee ID, email address,
//  and office number THEN I am presented with a menu with the option
//  to add an engineer or an intern or to finish building my team
function addMember() {
    for (var i = 0; i < questions.length; i++) {
        if (questions[i].name === "officeNumber") {
            questions.splice(i, 1);
            break;
        };
    };
    inquirer
        .prompt(newTeamMember)
        .then(answer => {
            // if (!answer.booleanValue) {
            //     answer.teamMember = "Done"
            // }
            switch (answer.teamMember) {
                case "Engineer": addEngineer(answer.teamMember);
                    break;
                case "Intern": addIntern(answer.teamMember);
                    break;
                // WHEN I decide to finish building my team
                // THEN I exit the application, and the HTML is generated
                case "Done":
                    // console.log(generateHTML(teamMembers))

                    fs.writeFile("./dist/rendered.html", generateHTML(teamMembers), () => {

                        console.log("Html file Successfully generated: Directory --- ./dist/rendered.html")
                    });
                    fs.writeFile("./dist/style.css", generateCSS(teamMembers), () => {

                        console.log("CSS file successfully generated: Directory --- ./dist/style.css")
                    });
                    break;
            }
        })
};

// WHEN I select the engineer option THEN I am prompted to enter the
// engineer’s name, ID, email, and GitHub username, and I am taken back
// to the menu
function addEngineer(answerChoosed) {

    const addEngineerQuestions = {
        type: "input",
        message: `Type in the ${answerChoosed}'s GitHub username: `,
        name: "gitHubUsername"
    };

    questions.push(addEngineerQuestions);
    questions[0].message = `What is ${answerChoosed}'s name? `;
    inquirer
        .prompt(questions)
        .then(answer => {
            // console.log(answer);
            const engineerInfo = new Engineer(answer.name, answer.idNumber, answer.emailAddress, answer.gitHubUsername);
            teamMembers.push(engineerInfo);
            addMember();
        });
    for (var i = 0; i < questions.length; i++) {
        if (questions[i].name === "gitHubUsername") {
            questions.splice(i, 1);
            break;
        };
    };
}

// WHEN I select the intern option THEN I am prompted to enter the intern’s
// name, ID, email, and school, and I am taken back to the menu
function addIntern(answerChoosed) {
    const addInternQuestions = {
        type: "input",
        message: `What is the ${answerChoosed}'s school name: `,
        name: "schoolName"
    };
    questions.push(addInternQuestions);
    questions[0].message = `What is ${answerChoosed}'s name`;
    inquirer
        .prompt(questions)
        .then(answer => {
            // console.log(answer);
            const internInfo = new Intern(answer.name, answer.idNumber, answer.emailAddress, answer.schoolName);
            teamMembers.push(internInfo);
            addMember();
        });
    for (var i = 0; i < questions.length; i++) {
        if (questions[i].name === "schoolName") {
            questions.splice(i, 1);
            break;
        };
    };
}

