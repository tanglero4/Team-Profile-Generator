const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path')
const page = require("./assets/template")
const  Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const memberArray = [];

// Questions for user input
let questions = [
    {
    type: "input",
    message: "What is the team member`s name?",
    name: "memberName",
   },
   {
    type: "input",
    message: "What is their job title?",
    name: "title",
   },
   {
    type: "input",
    message: "What is their ID",
    name: "id",
   },
   {
    type: "input",
    message: "What is their email?",
    name: "email",
   },
   {
    type: "input",
    message: "What is the manager`s office number?",
    name: "officeNumber",
   },
   
];
function addEmployee (){
  inquirer.prompt([
    {
      type: "list",
      message: "Who do you want to add?",
      name: "choice",
      choices: ["engineer", "intern", "build team"]
     },
  
    ])
    .then(answers=>{
      if(answers.choice == "engineer"){
        addEngineer()
      }
      else if(answers.choice == "intern"){
        addIntern()
      }
      else if(answers.choice == "build team"){
        buildTeam()
      }
    })
}
function addEngineer(){
  inquirer.prompt([
    {
      type: "input",
      message: "What is the team member`s name?",
      name: "memberName",
     },
     {
      type: "input",
      message: "What is their ID",
      name: "id",
     },
     {
      type: "input",
      message: "What is their email?",
      name: "email",
     },
     {
      type: "input",
      message: "What is github?",
      name: "github",
     },
  ]

  )
  .then(answers=>{
    const engineer = new Engineer(answers.memberName, answers.id, answers.email, answers.github);
    memberArray.push(engineer);
    addEmployee();
  })
}
function addIntern(){
  inquirer.prompt([
    {
      type: "input",
      message: "What is the team member`s name?",
      name: "memberName",
     },
     {
      type: "input",
      message: "What is their ID",
      name: "id",
     },
     {
      type: "input",
      message: "What is their email?",
      name: "email",
     },
     {
      type: "input",
      message: "What school did you go to?",
      name: "school",
     },
  ]

  )
  .then(answers=>{
    const intern = new Intern(answers.memberName, answers.id, answers.email, answers.school);
    memberArray.push(intern);
    addEmployee();
  })
}
function buildTeam(){
  fs.writeFileSync("teamProfile.html", generateTeam(memberArray));
  (err) =>
  err ? console.log(err) : console.log("Successful");
}

function generateTeam (members){
return `<!DOCTYPE html>
<html lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
    <div class="container">
        <div class="row">
          <div class="col-12 	--bs-danger-border-subtle">
            <h1>Team Profile</h1>
          </div>
          ${members.map(employee => {
            if (employee.getrole() == "manager"){
              return `
              <div class="col-4 text-success border border-primary rounded">
              <div class="p-3 mb-2 bg-primary text-white">
           ☕ ${employee.name}
            <br>
            ${employee.getrole()}
            </div>
            <ul class="list-group list-group-flush ">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: ${employee.email}</li></li>
                <li class="list-group-item">Github: ${employee.officeNumber}</li></li>
              </ul>
        </div>
              `
            } 
            else if (employee.getrole() == "engineer"){
              return `
              <div class="col-4 text-success border border-primary rounded">
            👓${employee.name}
            <br>
            ${employee.getrole()}
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: ${employee.email}</li></li>
                <li class="list-group-item">Github: ${employee.github}</li></li>
              </ul>
        </div>
              `
            }
            else if (employee.getrole() == "intern"){
              return `
              <div class="col-4 text-success border border-primary rounded">
            🧑🏽‍🎓${employee.name}
            <br>
            ${employee.getrole()}
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: ${employee.email}</li></li>
                <li class="list-group-item">Github: ${employee.school}</li></li>
              </ul>
        </div>
              `
            }
          })}
      </div>
</body>
</html>`
}
// Initialize app function
function init() {
    inquirer.prompt(questions)
        .then(function (memberAnswers) {
          console.log(memberAnswers)
       //  Creates file
       const manager = new Manager(memberAnswers.memberName, memberAnswers.id , memberAnswers.email , memberAnswers.officeNumber);
       memberArray.push(manager);
       generateTeam();
       buildTeam();
     });
    };
    
    // Initialize app
    init();