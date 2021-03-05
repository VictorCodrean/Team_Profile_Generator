const Manager = require("../lib/manager");

it("Cheking office Number", () => {
    const officeNo = 3;
    const exOfficeNo = new Manager("whatever", 99, "sample@sample", officeNo);
    expect(exOfficeNo.getOfficeNumber()).toBe(officeNo);
});

it("Checking to return 'Managee' on getRole()", () => {
    const teamMember = "Manager";
    const exTeamMember = new Manager("whatever", 99, "sample@sample", teamMember);
    expect(exTeamMember.getRole()).toBe(teamMember);
});
