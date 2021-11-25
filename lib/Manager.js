const Employee = require('./Employee');

class Manager extends Employee {
constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
}
getRole() {
    return 'Manager'
    //overridden
}
getOfficeNumber() {
    return this.officeNumber;
}
}

// const manager = new Manager ('3374', 'Ben', 50, 'Ben@gmail.com');

// console.log('--Manager--');
// manager.getRole();

module.exports = Manager;

