// --- Engineer class file ---

// Using inquirer for user input
const inquirer = require('inquirer');
// Get the class to be inherited 
const Employee = require("./employee");

class Engineer extends Employee 
{
    constructor(github)
    {
        super(name, id, email);
        this.github = github;
    }

    // Function to ask the user for the githib username
    getGithub()
    {
        inquirer
        .prompt([
        {
            type: 'input',
            name: 'github',
            message: "Enter the employee's Github username: "
        }])
        .then((data) => {
            this.github = data.github;
        });
    }

    // Function to return the class type
    getRole()
    {
        return 'Engineer';
    }
}

// Allow other files to access Engineer class
module.exports = Engineer;