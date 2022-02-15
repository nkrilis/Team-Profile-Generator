// --- Main js to create and manage operations ---

// Refrence to all class files
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Refrence to html string
const webStr = require('./src/helper');

// Using inquirer for user input
const inquirer = require('inquirer');

// Using fs for file writing
const fs = require("fs");

