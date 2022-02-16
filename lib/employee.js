// --- Employee class file ---

// Using inquirer for user input
const inquirer = require('inquirer');
// Create the employee class
class Employee 
{
    constructor(name, id, email)
    {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // function to return the name
    getName()
    {
        return this.name;
    }

    // Function to return the id
    getId()
    {
       return this.id;
    }

    // Function to return the email
    getEmail()
    {
       return this.email;
    }

    // Function to return the class type
    getRole()
    {
        return 'Employee';
    }
}

// Allow other files to access Employee class
module.exports = Employee;

