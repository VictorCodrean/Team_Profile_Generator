// include the Employee module to have acces to it
const Employee = require("./employee");

//  Employee being as a parent, we extend Engineer class
//  that will inherit properties and methods
//  super() - gets access to the parent's properties and methods:
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };

    getGithub() {
        return this.github
    };
    getRole() {
        return "Engineer";
    };
};

// export the Engineer module/class more specific
module.exports = Engineer;