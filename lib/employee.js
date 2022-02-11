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

    // function to get the name
    getName()
    {
        inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the employee's name: "
        }])
        .then((data) => {
            this.name = data.name;
        });
    }

    // Function to ask user for id
    getId()
    {
        inquirer
        .prompt([
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's id number: "
        }])
        .then((data) => {
           this.id = data.id;
        });
    }

    // Function to ask user for email
    getEmail()
    {
        inquirer
        .prompt([
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email address: "
        }])
        .then((data) => {
            this.email = data.email;
        });
    }

    // Function to return the class type
    getRole()
    {
        return 'Employee';
    }
}

// Allow other files to access Employee class
module.exports = Employee;