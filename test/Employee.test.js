const Employee = require("../lib/Employee");
describe('Employee class', () => {
  describe('getEmail method', () => {
      it('grabs the Employees email', () => {
          const email = "josh@gmail";
          const employee = new Employee("josh", "id", email);

          expect(employee.email).toBe(email);
      });
  });
  describe('getName method', () => {
      it('grabs the employees name',() => {
          const name = "Josh";
          const employee = new Employee(name);
          expect(employee.name).toBe(name);
      });
  });
  describe('getId method', () => {
      it('grabs the employees id', () => {
          const id = "21";
          const employee =new Employee("name", id, "email");
          expect(employee.id).toBe(id);
      });
  });
});