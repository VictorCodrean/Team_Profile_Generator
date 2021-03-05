const Employee = require("./employee")

// Manage will inherit the properties and methods from the "Employee" class,
//  by using the ---extends---- keyword.
//  super() - gets access to the parent's properties and methods:
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return "Manager";
    };
};

// export the Manager module
module.exports = Manager;