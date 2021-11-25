const Intern = require("../lib/Intern");
describe('Intern class extended from Employee', () => {
    describe('getSchool method', () => {
        it('it grabs the Interns school', () => {
            const school = 'GA Tech';
            const intern = new Intern ('Josh', 30, 'josh@gmail.com', school);
            expect(intern.school).toBe(school);
        });
    });
    describe('grabs the role for Intern method', () => {
        it('it grabs the intern role', () => {
            const role = 'Intern';
            const employee = new Intern ('Josh', 30, 'josh@gmail.com', 'GA Tech');
            expect(employee.getRole()).toBe(role);
        });
    });
});