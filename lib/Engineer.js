// imports the parent class

const Engineer = require("./Employee");

// creates an Engineer class that extends the 'Employee' class

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        console.log("Engineer")
    }
}