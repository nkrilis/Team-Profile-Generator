// --- Engineer class file ---

// Using inquirer for user input
const inquirer = require('inquirer');
// Get the class to be inherited 
const Employee = require("./employee");

class Engineer extends Employee 
{
    constructor(name, id, email, github)
    {
        super(name, id, email);
        this.github = github;
    }

    // Function to return the github username
    getGithub()
    {
       return this.github
    }

    // Function to return the class type
    getRole()
    {
        return 'Engineer';
    }
}


// Allow other files to access Engineer class
module.exports = Engineer;

