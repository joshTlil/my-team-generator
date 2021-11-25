const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
      return this.school;
    }

    getRole() {
        return 'Intern'
    }

    
    
}

// const intern = new Intern('Georgia Tech', 'josh', 25, 'josh@gmail.com');

// console.log(Intern);
// intern.printInfo();
// intern.getSchool();

module.exports = Intern;