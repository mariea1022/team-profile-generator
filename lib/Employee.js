class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getId() {
      if (typeof this.id === 'string') {
        throw error("Needs to be a number");
      }
      return this.id;
    }

    getEmail() {
      return this.email
    }

    getRole() {
      return "Employee";
    }
  }

  module.exports = Employee;