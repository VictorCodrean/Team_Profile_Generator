# Team Profile Generator

## Table of contents
- [Description](#Description)
- [User Story](#User/Story)
- [Walk-through Video](#Videode_monstration)
- [Installation](#Installation)
- [Usage](#Usage)
- [Framework HTML/JS](#Framework)
- [Quick GoThrough](#Gothrough)
- [Contributors](#Contributing)

## Illustration

![sampleReadme](/assets/illustrations.gif)

## Description

It's a command-line application that helps us to generate an HTML webpage that takes information about employees on a team... based on user inputs about teamMembers
   
  
## User/Story  
```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```
## Video_demonstration

[![video](/assets/pictures/generated_HTML.png)](https://youtu.be/xjijjbzLO2g "Video demonstration")

## Framework used:
```md
Node.js to run 
```

## Installation
```md
git clone <https://github.com/VictorCodrean/Team_Profile_Generator.git> (to get the code)
npm i jest               (to install the test packages) 
npm i inquirer               (to install inquirer packages) 
node <index.js>       (to run the program)
```

## Usage
Clone repository on your local machine, install dependencies (npm i jest; npm i inquirer) - previous step's note and after you get npm packages installed run "node index.js", answer the prompts and the HTML file will be created.  

  * npm i jest
  * npm i inquirer
  * node index.js

## Framework
* HTML- Data & CSS - (build with Bootstrap and own CSS style)
* JS - code:
    * modules imported...
        ```
        const inquirer = require("inquirer");
        const fs = require("fs");
        const generateHTML = require("./lib/createHTML");
        ...
        ```
    * inquirer
         ```
         .prompt(questions)
        .then(response => {
            ...
        }
        ...
        ```
    * classes
         ```
         class Employee {
            constructor(name, id, email) {
            this.name = name;
            this.id = id;
            this.email = email;
        };
        ...
        ```
    * methods
         ```
        getName() {
            return this.name;
        };

        getRole() {
        return "Employee";
        };
        ...
        ```

## Gothrough
* WHEN I start the application
* THEN I am prompted to enter the team manager’s info
     ```
    name
    employee ID
    email address
    office number
    ```
* WHEN I finish to enter the team manager’s info
* THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
* WHEN I select the engineer option
* THEN I am prompted to enter the engineer's info
    ```
    name
    ID
    email
    GitHub username
    ```
and I am taken back to the menu
* WHEN I select the intern option
* THEN I am prompted to enter the intern's info
    ```
    name
    ID
    email
    School name
    ```

## Credits
 * - [StackOverFlow](https://stackoverflow.com/)
 * - [Bootstrap](https://bulma.io/documentation/overview/start/)

## License
The project is under

[![License: None](https://img.shields.io/badge/License-None-brightgreen.svg)](https://opensource.org/licenses/None)

## Directory
* [GitHub Source](https://github.com/VictorCodrean/API_Weather_Dashboard)

## Contributing
Victor Codrean    
*  [Repository link:](https://github.com/VictorCodrean/Readme_Generator)

Asking me any questions:

<a href="mailto:codreanvictor@gmail.com" style="text-decoration:none"><img height="20" src = "https://img.shields.io/badge/Gmail-c14438?&style=for-the-badge&logo=gmail&logoColor=white&style=plastic"></a>

[<img height="20" src="https://img.shields.io/badge/-GitHub-black.svg?&style=for-the-badge&logo=github&logoColor=white&style=plastic"/>](https://github.com/VictorCodrean)
