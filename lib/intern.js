// --- Intern class file ---

// Get the class to be inherited 
const Employee = require("./employee");

class Intern extends Employee 
{
    constructor(name, id, email, school)
    {
        super(name, id, email);
        this.school = school;
    }

    // Function to ask the user for the school name
    getSchool()
    {
      return this.school;
    }

    // Function to return the class type
    getRole()
    {
        return 'Intern';
    }
}

// Allow other files to access Intern class
module.exports = Intern;

