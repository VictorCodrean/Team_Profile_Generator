const Intern = require("../lib/intern.js");

it("Checking school name", () => {
    const school = "UW";
    const exSchool = new Intern("whatever", 99, "sample@sample", school);
    expect(exSchool.getSchool()).toBe(school);
});

it("Checking to return 'intern' on getRole()", () => {
    const teamMember = "Intern";
    const exTeamMember = new Intern("whatever", 99, "sample@sample", teamMember);
    expect(exTeamMember.getRole()).toBe(teamMember);
});

// the other properties are extended through Employee and we don't have to retest...