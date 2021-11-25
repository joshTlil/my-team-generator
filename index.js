const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./template.js");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employee = [];



function addEmployee ()  {
    inquirer.prompt([
       { type: 'list',
        name: 'addEmployee',
        message: 'create your team',
        choices: ['Manager', 'Intern', 'Engineer'],
       },

    ]).then(val => {
        if (val.addEmployee === 'Manager') {
           createManager();
        } else if (val.addEmployee === 'Intern') {
          createIntern();
        } else createEngineer();
          
        
    })
 
}


function createManager () { 
 return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name',


        },
        {
            type: 'input',
            name: 'Id',
            message: 'What is there ID'
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is there email'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the managers office number'
        },
        {
            type: 'list',
            name: 'continue',
            message: 'continue to build team?',
            choices: ['add Employee', 'buildTeam']
            
        }
    ]).then(val => { console.log(val.continue)
       let manager = new Manager(val.name, val.Id, val.email, val.officeNumber);
        employee.push(manager);
        if(val.continue === 'add Employee') {
            addEmployee();
        } else 
        buildTeam(employee);

        
    })
}

function createEngineer () {
  return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your github'
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineers name',
        },
        {
            type: 'input',
            name: 'id',
            message: "what is the Engineer's id "
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is the engineers email'
        },
        {
            type: 'list',
            name: 'continue',
            message: 'continue to build team',
            choices: ['add Employee', 'buildTeam'],
        }

    ]).then(val => {
      let  engineer = new Engineer(val.name, val.id, val.email, val.github);
        employee.push(engineer);
        if(val.continue === 'add Employee') {
            addEmployee();
        } else 
        buildTeam(employee);
    })
}

function createIntern () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'what school did you go to',
        },
        {
            type: 'input',
            name: 'name',
            message: 'what is the interns name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'what is the Interns id'
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is the interns email'
        },
        {
            type: 'list',
            name: 'continue',
            message: 'Do you wish to continue',
            choices: ['add Employee', 'buildTeam'],


        
        }
        
    ]).then(val => {
       let intern = new Intern(val.name, val.id, val.email, val.school);
        employee.push(intern);
        if(val.continue === 'add Employee') {
            addEmployee();
        } else 
        buildTeam(employee);
    })
}


function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
      }
      fs.writeFileSync(outputPath, render(employee), "utf-8");
      console.log(employee);

}
    


    

addEmployee();