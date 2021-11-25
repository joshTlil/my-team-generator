const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;

    }
    getGitHub() {
        
      return this.github;
    }
    getRole() {
        return 'Engineer'
    }
}

// const engineer = new Engineer('BogReal','Bob', 75, 'bob@gmail.com' )

// console.log('--Engineer--');
// engineer.getGitHub();

module.exports = Engineer;