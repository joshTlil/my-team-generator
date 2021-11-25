const Manager = require("../lib/Manager");
describe('Manager class extended from Employee', () => {
    describe('getOfficeNumber method', () => {
        it('it grabs the office number from the manager', () => {
            const officeNumber = 45;
            const manager = new Manager ('Josh', 25, 'josh@gmail.com', officeNumber);
            expect(manager.officeNumber).toBe(officeNumber);
        });
    });
    describe('grabs the Manager Role Method', () => {
        it('it grabs the manager role', () => {
            const role = 'Manager';
            const employee = new Manager ('Josh', 25, 'josh@gmail.com', '888');
            expect(employee.getRole()).toBe(role);
        });
    });
});