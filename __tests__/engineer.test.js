const Engineer = require("../lib/engineer");

it("Checking method getGithub username", () => {
    const username = "Victorcodrean";
    const exUsernam = new Engineer("whatever", 99, "sample@sample", username);
    expect(exUsernam.getGithub()).toBe(username);
});

it("Checking to return 'Engineer' on getRole()", () => {
    const teamMember = "Engineer";
    const exTeamMember = new Engineer("whatever", 99, "sample@sample", teamMember);
    expect(exTeamMember.getRole()).toBe(teamMember);
});
