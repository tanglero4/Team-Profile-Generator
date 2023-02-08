const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id , email);
      this.github = github;
    }
    getname() {
        return this.name;
      }
      getid() {
        return this.id;
      }
      getemail() {
        return this.email;
      }
      getrole(){
        return "engineer";
      }
      getGithub(){
        return this.github;
      }
    }
    module.exports = Engineer 
