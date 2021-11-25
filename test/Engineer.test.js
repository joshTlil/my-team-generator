const Engineer = require("../lib/Engineer");
describe('Engineer class extended from Employee', () =>  {
    describe('getGitHub method', () => {
        it('it grabs the Engineers github username', () => {
            const github = 'joshTlil';
            const engineer = new Engineer ('Josh', 25, 'josh@gmail.com', github);
            expect(engineer.github).toBe(github);

        });
    });
    describe('grabs the Engineer Role method', () => {
       it('it grabs the engineer role', () => {
           const role = 'Engineer';
           const employee = new Engineer ('Josh', 25, 'josh@gmail.com', 'joshTlil');
           expect(employee.getRole()).toBe(role);
       });
    });
});