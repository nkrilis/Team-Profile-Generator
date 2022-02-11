// --- Intern class file ---

// Using inquirer for user input
const inquirer = require('inquirer');
// Get the class to be inherited 
const Employee = require("./employee");

class Intern extends Employee 
{
    constructor(school)
    {
        super(name, id, email);
        this.school = school;
    }

    // Function to ask the user for the school name
    getSchool()
    {
        inquirer
        .prompt([
        {
            type: 'input',
            name: 'school',
            message: "Enter the employee's school name: "
        }])
        .then((data) => {
            this.school = data.school;
        });
    }

    // Function to return the class type
    getRole()
    {
        return 'Intern';
    }
}

// Allow other files to access Intern class
module.exports = Intern;