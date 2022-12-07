class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
      if (typeof this.name !== 'string') {
        throw "Needs to be a string";
      } else {
        return this.name;
    }}

    getId() {
      if (typeof this.id === 'string') {
        throw "Needs to be a number";
      } else {
        return this.id;
    }}

    getEmail() {
      if (!this.email.includes("@")) {
        throw "Needs to be a valid email"
      } else {
        return this.email
    }}

    getRole() {
      return "Employee";
    }
  }

  module.exports = Employee;