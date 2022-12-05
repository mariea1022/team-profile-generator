// imports the parent class

const Employee = require("./Employee");

// creates an Intern class that extends the 'Employee' class

class Intern extends Employee {
    constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    }

    getRole() {
        console.log("Intern")
    }
}

module.exports = Intern;