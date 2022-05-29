const inquirer = require('inquirer');

const fs = require('fs');

const Intern = require ('./role classes/Intern')

const Engineer = require ('./role classes/Engineer')

const Manager = require ('./role classes/Manager')

const teammembers =[];

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
      name: 'id',
      message: "What is the employee's ID?",
    },
    {
    type: 'list',
    message: "Please select the employee's role",
    name: 'role',
    choices: ["Manager", "Engineer", "Intern", ]
    },
    {
    type: 'input',
    name: 'email',
    message: "please write the employee's email",
   },
   {
    type: 'input',
    name: 'github',
    message: "please write the employee's github (if the employee doesn't have a github skip this question by pressing enter)",
   },
   {
    type: 'input',
    name: 'office',
    message: "please write the employee's office number (if the employee doesn't have an office number skip this question by pressing enter)",
   },
   
    

  ])

.then (function({name, id, role, email, github, office}){
    inquirer
    .prompt([
        {
            type: 'list',
            message: "Will you add another member to the team?",
            name: 'addmoremembers',
            choices: [yes, no, ]
           },
    ])


})

.then(function({name, id, role, email, github, office, addmoremembers}){

    let blankemployee = ""
    
    if (role === "Engineer"){
        blankemployee = new Engineer(name, id, role, email, github, office)
    }
    
    else if (role === "Manager"){
        blankemployee = new Manager(name, id, role, email, github, office)
    }

    else {
        blankemployee = new Intern(name, id, role, email, github, office)
    }
  
    teammembers.push(blankemployee);

    addHtml(blankemployee)

   
})
 .then(function(){
     if(addmoremember === "yes"){
         prqu ();
     }
     else {
         ///3rd part of html///call function to render final part of the html file
     }
 })





  prqu () ;