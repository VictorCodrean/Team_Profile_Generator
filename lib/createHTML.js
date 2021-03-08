const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");



function managerCard(teamMembers) {
    var manager = teamMembers[0]
    // console.log(manager);
    const htmlManager = `
     <div class="card mb-4 card-hover" style="background-color: #d9b382 ;">
        <div class="card-header" style="background-color: #b39064 ; color: aliceblue">
        <h4>${manager.name}</h4>
        </div>
        <div class="card-body">
            <h5 class="card-title"><i class="fas fa-user-secret pr-2"></i>Manager</h5>
            <ul class="list-group my-list">
                <li class="list-group-item" style="background-color: beige;">
                <i class="fas fa-id-badge pr-2"></i>ID: ${manager.id}</li>
                <li class="list-group-item" style="background-color: beige;">
                <i class="fas fa-envelope-square pr-2"></i>Email: <a
                    href="mailto:${manager.email}">${manager.email}</a>
                </li>
                <li class="list-group-item" style="background-color: beige;">
                <i class="far fa-building pr-2"></i>Office number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `
    return htmlManager;
    // console.log(htmlManager);
}

function engineerCard(teamMembers) {
    const engineersArray = teamMembers.filter((teamMember) => {
        return teamMember.getRole() === "Engineer"
    });
    // console.log(engineersArray);
    const engineerEmployeesHtml = engineersArray.map(member => `
        <div class="card mb-4 card-hover" style="background-color: #d9b382 ;">
            <div class="card-header" style="background-color: #b39064 ; color: aliceblue">
            <h4>${member.name}</h4>
            </div>
            <div class="card-body">
                <h5 class="card-title"><i class="fas fa-user-tie pr-2"></i>Engineer</h5>
                <ul class="list-group my-list">
                <li class="list-group-item" style="background-color: beige;">
                <i class="fas fa-id-badge pr-2"></i>ID: ${member.id}</li>
                <li class="list-group-item" style="background-color: beige;">
                 <i class="fas fa-envelope-square pr-2"></i>Email: <a
                    href="mailto:${member.email}">${member.email}</a></li>
                <li class="list-group-item" style="background-color: beige;">
                <i class="fab fa-github pr-2"></i>Github: 
                <a href="https://github.com/${member.github}" target="_blank">${member.github}</a></li>
            </ul>
            </div>
        </div>
    `

    );
    const engineerCard = engineerEmployeesHtml.join('');
    return engineerCard;
    // console.log(engineerCard);
}

function internCard(teamMembers) {
    const internsArray = teamMembers.filter((teamMember) => {
        return teamMember.getRole() === "Intern"
    });
    // console.log(internsArray);
    const internsHtml = internsArray.map(intern => `
        <div class="card mb-4 card-hover" style="background-color: #d9b382 ;">
            <div class="card-header" style="background-color: #b39064 ; color: aliceblue">
            <h4>${intern.name}</h4>
            </div>
            <div class="card-body">
                <h5 class="card-title"><i class="fas fa-user-graduate pr-2"></i>Intern</h5>
                <ul class="list-group my-list">
                <li class="list-group-item" style="background-color: beige;">
                <i class="fas fa-id-badge pr-2"></i>ID: ${intern.id}</li>
                <li class="list-group-item" style="background-color: beige;">
                 <i class="fas fa-envelope-square pr-2"></i>Email: <a
                    href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item" style="background-color: beige;">
                <i class="fas fa-university pr-2 "></i>School: ${intern.school}</li>
            </ul>
            </div>
        </div>
    `
    );
    const internCard = internsHtml.join('');
    return internCard;
    // console.log(internCard);
}

function generateHTML(teamMembers) {
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
    <link rel="stylesheet" href="style.css">
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
        <div class="row justify-content-center">
            <div class="col-10 d-flex justify-content-center ">
                <div class="card-deck ">
                    ${managerCard(teamMembers)}
                    ${engineerCard(teamMembers)}
                    ${internCard(teamMembers)}
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `
}
module.exports = generateHTML;