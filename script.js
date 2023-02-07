const inquirer = require("inquirer");
const fs = require("fs");

// Questions for user input
let questions = [
    {
    type: "input",
    message: "What is the team member`s name?",
    name: "member-name",
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
    message: "What is their github link?",
    name: "github",
   },
   
];

const newHTML = `<!DOCTYPE html>
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
          <div class="col-12 bg-danger-subtle text-center">
            <h1>Team Profile</h1>
          </div>
          <div class="col-4 text-success">
            ${questions.name}
            <br>
            ${questions.title}
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${questions.id}</li>
                <li class="list-group-item">Email: ${questions.email}</li></li>
                <li class="list-group-item">Github: ${questions.github}</li></li>
              </ul>
        </div>
      </div>
</body>
</html>`;

// Initialize app function
function init() {
    inquirer.prompt(questions)
        .then(function (memberAnswers) {
       //  Creates file
        fs.writeFileSync("teamProfile.html", generateTeam(memberAnswers));
        (err) =>
        err ? console.log(err) : console.log("Successful");
     });
    };
    
    // Initialize app
    init();