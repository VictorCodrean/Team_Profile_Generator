// include the Employee module to have acces to it
const Employee = require("./employee");

// Intern will inherit the properties and methods from the "Employee" class,
//  by using the ---extends---- keyword.
//  super() - gets access to the parent's properties and methods:
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return "Intern";
    };
};

// export the Intern module
module.exports = Intern;