// imports the parent class

const Employee = require("./Employee");

// creates a Manager class that extends the 'Employee' class

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;