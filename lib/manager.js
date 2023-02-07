import {Employee} from ("./employee");

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
        return "Manager";
      }
      getOfficeNumber(){
        return this.officeNumber;
      }
    }
    export { Manager }