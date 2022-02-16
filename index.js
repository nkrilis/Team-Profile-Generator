// --- Main js to create and manage operations ---

// Refrence to all class files
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Refrence to html creation functions
const { createCard, starterHtml, closeHtml } = require('./src/helper');

// Using inquirer for user input
const inquirer = require('inquirer');

// Using fs for file writing
const fs = require("fs");

function writeToFile() 
{
    let content = starterHtml();
    fs.writeFile("./dist/index.html", content, (err) =>
    err ? console.log(err) : console.log('Success! Your page was created'))
}

function appendCard(obj)
{
    let content = createCard(obj);
    fs.appendFile("./dist/index.html", content, (err) =>
    err ? console.log(err) : console.log('Success! Your page was created'))
}

function closeFile ()
{
    let content = closeHtml();
    fs.appendFile("./dist/index.html", content, (err) =>
    err ? console.log(err) : console.log('Success! Your page was created'))
}

const createEmployee = () =>
{
    inquirer
        .prompt([
        {
            type: "list",
            name: "type",
            message: "Please select what kind of employee you would like",
            choices: ["Manager", "Engineer", "Intern"],
        },
        {
            type: "input",
            name: "name",
            message: "Enter the Employee's Name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the Employee's ID number"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the Employee's Email"
        },
        {
            type: "input",
            name: "github",
            message: "Enter the Engineer's Github user name",
            when(answers) {
            return answers.type === "Engineer"
            }
        },
        {
            type: "input",
            name: "school",
            message: "Enter the Inter's School name",
            when(answers) {
                return answers.type === "Intern"
            }
        },
        {
            type: "input",
            name: "officeNum",
            message: "Enter the Managers Office Number",
            when(answers) {
                return answers.type === "Manager"
            }
        },
        {
            type: "list",
            name: "more",
            message: "Would you like to add another employee?",
            choices: ['Yes', 'No']
        }
    ])
    .then((data) =>
    {
        if(data.type === "Manager")
        {
            let manager = new Manager(data.name, data.id, data.email, data.officeNum);
            appendCard(manager);
        }
        else if(data.type === "Engineer")
        {
            let engineer = new Engineer(data.name, data.id, data.email, data.github);
            appendCard(engineer);
        }
        else if(data.type === "Intern")
        {
            let intern = new Intern(data.name, data.id, data.email, data.school);
            appendCard(intern);
        }
        
        if(data.more === "Yes")
        {
            return createEmployee();
        }
        else if(data.more === "No")
        {
            closeFile();
        }
    })
    .catch((err) => 
    {
        console.log(err);
    });
}
writeToFile();
createEmployee();