class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getId() {
      if (typeof this.id !== 'string') {
        throw error("Needs to be a number");
      }
      // console.log(`ID: ${this.id}`);
      return this.id;
    }

    getEmail() {
      console.log(`Email: ${this.email}`);
    }

    getRole() {
      return "Employee";
    }
  }

  module.exports = Employee;