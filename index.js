// inquirer to be able to get user answers to prompts
// fs to write file
const inquirer = require("inquirer");
const fs = require("fs");

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
    {
        type: "confirm",
        name: "booleanValue",
        message: "Do you need to add another employee?",
    },

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
    inquirer
        .prompt(newTeamMember)
        .then(answer => {
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
                        console.log("created")
                    });
                    break;
            }
        })
};

// WHEN I select the engineer option THEN I am prompted to enter the
// engineer’s name, ID, email, and GitHub username, and I am taken back
// to the menu
function addEngineer(answerChoosed) {
    for (var i = 0; i < questions.length; i++) {
        if (questions[i].name === "officeNumber") {
            questions.splice(i, 1);
            break;
        };
    };
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

            const internInfo = new Engineer(answer.name, answer.idNumber, answer.emailAddress, answer.schoolName);
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


function managerCard(manager) {
    console.log(manager);
    const htmlManager = `
    <div class="card mb-3" style="background-color: #d9b382 ;">
        <div class="card-header" style="background-color: #b39064 ; color: aliceblue">Manager</div>
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <ul class="list-group">
                <li class="list-group-item" style="background-color: beige;">ID: ${manager.id}</li>
                <li class="list-group-item" style="background-color: beige;">Email: <a href="mailto:${manager.email}">${manager.email}</a>
                </li>
                <li class="list-group-item" style="background-color: beige;">Office number: ${manager.officeNumber}
                </li>
            </ul>
         </div>
    </div>
    `
    return htmlManager;
}

function engineerCard(teamMembers) {
    const engineersArray = teamMembers.filter((teamMember) => {
        return teamMember.getRole() === "Engineer"
    });
    console.log(engineersArray);
    const engineerEmployeesHtml = engineersArray.map(member =>
        `
        <div class="card mb-3" style="background-color: #d9b382 ;">
    <div class="card-header" style="background-color: #b39064 ; color: aliceblue">Engineer</div>
    <div class="card-body">
        <h5 class="card-title">${member.name}</h5>
        <ul class="list-group">
            <li class="list-group-item" style="background-color: beige;">ID: ${member.id}</li>
            <li class="list-group-item" style="background-color: beige;">Email: <a href="mailto:${member.email}">${member.email}</a>
            </li>
            <li class="list-group-item" style="background-color: beige;">Github: ${member.github}
            </li>
        </ul>
    </div>
    </div>
        `
    );
    const engineerCard = engineerEmployeesHtml.join('');
    return engineerCard;

    console.log(engineerCard);

}

function generateHTML(teamMembers) {
    var manager = teamMembers[0]

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/a3b9a0e76d.js" crossorigin="anonymous"></script>
</head>

<body style="background-color: beige;">
    <header style="background-color: #e45f56;">
        <nav class="text-center " style="color:beige;">
            <img src="../assets/pictures/android-chrome-192x192.png" width="35" height="35"
                class="d-inline-block mr-2 mb-3" alt="Team profile">
            <h1 class="d-inline-block mb-0">Team Profile<i class="fas fa-users pl-3"></i></h1>
        </nav>
    </header>
    <div class="container mt-5">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
            ${managerCard(manager)}
            ${engineerCard(teamMembers)}

            </div>
        </div>
    </div>
</body>

</html>
    `
}




// function engineerCard(teamMembers) {
//     const engineersArray = teamMembers.filter((teamMember) => {
//         return teamMember.getRole() === "Engineer"
//     });
//     console.log(engineersArray);
//     engineersArray.forEach(member => {
//         const engineerEmployeesHtml = `
//         <div class="card mb-3" style="background-color: #d9b382 ;">
//     <div class="card-header" style="background-color: #b39064 ; color: aliceblue">Engineer</div>
//     <div class="card-body">
//         <h5 class="card-title">${member.name}</h5>
//         <ul class="list-group">
//             <li class="list-group-item" style="background-color: beige;">ID: ${member.idNumber}</li>
//             <li class="list-group-item" style="background-color: beige;">Email: <a href="mailto:${member.emailAddress}">${member.emailAddress}</a>
//             </li>
//             <li class="list-group-item" style="background-color: beige;">Github: ${member.gitHubUsername}
//             </li>
//         </ul>
//     </div>
//     </div>
//         `
//         console.log(engineerEmployeesHtml);

//     })

//     // const engineerEmployeesHtml = engineersArray.map(Engineer => )

// }
