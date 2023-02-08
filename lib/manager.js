const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id , email);
      this.officeNumber = officeNumber;
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
        return "manager";
      }
      getOfficeNumber(){
        return this.officeNumber;
      }
    }
    module.exports = Manager