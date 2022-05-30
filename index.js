const inquirer = require('inquirer');

const fs = require('fs');

const Intern = require ("./roleclasses/Intern")

const Engineer = require ("./roleclasses/Engineer")

const Manager = require ("./roleclasses/Manager")

const teammembers =[];

  //beginningofhtml ();


function prqu () {
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

.then (function({}){
    inquirer
    .prompt([
        {
            type: 'list',
            message: "Will you add another member to the team?",
            name: 'addmoremembers',
            choices: ["yes", "no", ]
           },
    ])




.then(function({name, id, role, email, github, office,}){

    let employee = ""
    
    if (role === "Engineer"){
        employee = new Engineer(name, id, role, email, github, office)
    }
    
    else if (role === "Manager"){
        employee = new Manager(name, id, role, email, github, office)
    }

    else if (role === "Intern"){
        employee = new Intern(name, id, role, email, github, office)
    }
  
    teammembers.push(employee);

    middleHtml(employee)

   

     .then(function(){
       if(addmoremembers === "yes"){
         prqu ();
        }
        else {
         ///3rd part of html///call function to render final part of the html file
        }
        });

});

});

};
///the beginning of the html file///
function beginningofhtml () {
const html = `<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title></title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="./style.css">

</head>

<body>
    <nav class="navbar navbar-dark  py-4" id = "blacknavbar">
        <h2>  </h2>
     </nav>
 
     <section class="row" id="theblankpart">
        
            <h5>Meet the team:</h5>
      

    </section>

    <section class="row">

        <div class="col-12 col-md-12"> `;
        

    fs.writeFile('./finalhtml/teamgenerator.html', html )

}

//the middle of the html file

function middleHtml (employee) {
    return new Promise (function ()
    {
    const name = employee.getName();
    const role = employee.getRole();
    const id = employee.getId();
    const email = employee.getEmail();
    const github = employee.getGithub();
    const officenumber = employee.getOfficeNumber();
    const school = employee.getSchool();
    let data = ""
    if (role === "Intern") {
        
    data =          
    ` <div class="col-12 col-sm-6 col-lg-2 mb-3">
    <div class="card">
      <h3 class="card-header" id="date2">
        ${name},
        Intern 🎓
      </h3>
      <div class="card-body">
        <p class="card-text">
          <p id = "id">ID:${id}</p>
          <p id = "email"> Email: ${email}</p>
          <p id = "school">School: ${school}}</p>

          
        </p>
   
      </div>
    </div>
  </div>`
    }
    
   else if (role === "Engineer") {
   data = 
   `          <section class="row justify-content-around">
  
   <div class="col-12 col-sm-6 col-lg-2 mb-3">
     <div class="card">
       <h3 class="card-header" id = "date0">
       ${name},
       Engineer 👓
       </h3>
       <div class="card-body">
         <p class="card-text">
           <p id = "id">ID:${id}</p>
           <p id = "email"> Email: ${email}</p>
           <p id = "Github">github: ${github}</p>


         </p>

       </div>
     </div>
   </div>`
   }

   else if (role === "Manager") {
data =
    `<div class="col-12 col-sm-6 col-lg-2 mb-3">
    <div class="card">
      <h3 class="card-header" id = "date1">
        ${name},
        Manager ☕
      </h3>
      <div class="card-body">
        <p class="card-text">
          <p id = "id">ID:${id}</p>
          <p id = "email"> Email:${email}</p>
          <p id = "officenumber">office number:${officenumber}</p>

        </p>

      </div>
    </div>
  </div>`

   }

    })

}

function endhtml () {

data = `          </section>
</div>



</section>


</body>`



}



  prqu ();


  