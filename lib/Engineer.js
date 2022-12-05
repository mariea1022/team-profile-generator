// imports the parent class

const Employee = require("./Employee");

// creates an Engineer class that extends the 'Employee' class

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;