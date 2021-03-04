// getting the file that will run test on...
const Employee = require('../lib/employee.js')

// check for inputs to be as exptected
it("Checking name through constructor we have in Employee class ", () => {
    const name = "Victor";
    const exName = new Employee(name);
    expect(exName.getName()).toBe(name);
});

it("Checking Id through constructor", () => {
    const id = 99;
    const exId = new Employee("whatever", id);
    expect(exId.getId()).toBe(id);
});

it("Checking as an email address", () => {
    const email = "sample@sample.com";
    const exEmail = new Employee("whatever", 99, email);
    expect(exEmail.getEmail()).toBe(email);
});

it("Checking getRole() to return 'Employee' ", () => {
    const teamMember = "Employee";
    const exTeamMember = new Employee("whatever", 99, "sample@sample.com", teamMember)
    expect(exTeamMember.getRole()).toBe(teamMember);
});

// We have to check Employee class
it("Checking Employee's object", () => {
    const example = new Employee();
    expect(typeof (example)).toBe("object");
})