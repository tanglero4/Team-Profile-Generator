import {Employee} from ("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id , email);
      this.school = school;
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
        return "Intern";
      }
      getSchool(){
        return this.school;
      }
    }
    export { Intern }
