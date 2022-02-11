// --- Manager class file ---

// Using inquirer for user input
const inquirer = require('inquirer');
// Get the class to be inherited 
const Employee = require("./employee");

class Manager extends Employee 
{
    constructor(officeNumber)
    {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // Function to return the class type
    getRole()
    {
        return 'Manager';
    }
}

// Allow other files to access Manager class
module.exports = Manager;