const inquirer = require('inquirer');

const fs = require('fs');

const Intern = require ('./role classes/Intern')

const Engineer = require ('./role classes/Engineer')

const Manager = require ('./role classes/Manager')


const prqu = () =>
inquirer


 .prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the employee's name?",
    },
    {
      type: 'input',
      name: 'ID',
      message: "What is the employee's ID?",
    },
    {
    type: 'list',
    message: "Please select the employee's role",
    name: 'role',
    choices: ["Manager", "Engineer", "Intern", ]
    },
    

  ])

  prqu ()