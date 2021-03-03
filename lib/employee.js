//  Define the class Employee as a parent with given 
//  properties and methods...
class Employee {
    // properties
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    // Methods
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return "Employee";
    };
}
// Export the class Employee
module.exports = Employee