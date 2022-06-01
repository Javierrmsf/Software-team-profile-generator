const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const teammembers = [];

function prqu() 

{
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
        message: "if the employee is an engineer, please write the employee's github (if the employee isn't an engineer skip this question by pressing enter)",
       },
       {
        type: 'input',
        name: 'office',
        message: "if the employee is a manager, please write the employee's office number (if the employee isn't a manager skip this question by pressing enter)",
       },
       {
        type: 'input',
        name: 'school',
        message: "if the employee is an intern, please write the employee's school name ( if the employee isn't an intern skip this question by pressing enter.) "

       }

      ])

    .then(function({name, role, id, email, school, github, office}) {
        inquirer
    .prompt([
        {
            type: 'list',
            message: "are there any other members in the team?",
            name: 'membersquestion',
            choices: ["yes", "no", ]
           },
    ])

        .then(function({ membersquestion}) {
            let employee;
            
            if (role === "Intern") {

                employee = new Intern(name, id, email, role, school);
            }

            if (role === "Engineer"){
                employee = new Engineer(name, id, email, role, github);
            }
            
            if (role === "Manager"){
                employee = new Manager(name, id, email, role, office);
            }


            teammembers.push(employee);


            middlehtml(employee)
            .then(function() {
                if (membersquestion === "yes") {
                    prqu();
                } else {

                  
                    endHtml();
                }
            });
            
        });
    });
}





///the beginning of the html file///
function beginninghtml () {


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

   
       <section class="row" id="theblankpart">
          
              <h5>Meet the team:</h5>
        
  
      </section>
  
      <section class="row">
  
          <div class="col-12 col-md-12"> 
          <section class="row justify-content-around">`;
   

  fs.writeFile("./finalhtml/finalhtml.html", html, function() {} );
  
}

//the middle of the html file

function middlehtml(employee) {
  return new Promise(function(resolve, reject) {



      
      const name = employee.getName();
      const role = employee.getRole();
      const id = employee.getId();
      const email = employee.getEmail();
      const github = employee.getGithub();
      const school = employee.getSchool();
      const office = employee.getOfficeNumber();

      let data = "";




      if (role === "Engineer") {
          
          data = 
 `

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
 </div>`;





      } if (role === "Intern") {
          
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
        <p id = "school">School: ${school}</p>

        
      </p>
 
    </div>
  </div>
</div>`;




      } if (role === "Manager") {
          
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
                <p id = "officenumber">office number:${office}</p>
      
              </p>
      
            </div>
          </div>
        </div>`
      }

      
      fs.appendFile("./finalhtml/finalhtml.html", data, function (err) {
          if (err) {return reject(err);};
          return resolve();});});
  

function endhtml () {

data = `          </section>
</div>



</section>


</body>`;

fs.appendFile("./finalhtml/thefinalfile.html", html, function (err) {
  if (err) {
      console.log(err);
  };
});
console.log("end");



}



 startapplication ();


  