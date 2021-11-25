class Employee {
    constructor(name, id, email) {
       this.name = name;
       this.id = id;
       this.email = email;
    }
    getEmail() {
        
        return this.email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getRole() {
    return 'Employee'
    }
//     printInfo() {
//         console.log(`This vehicle has ${this.name} wheels`);
//         console.log(`This vehicle has an id of ${this.id}`);
//         console.log(`This vehicle has ${this.school} wheels`);
//         console.log(`This vehicle has an id of ${this.email}`);
//           }
      

}
module.exports = Employee;