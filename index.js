// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            about: 'about',
            message: 'Provide some details about your project:'
        },
        {
            type: ''
        }
    ])};

    questions().then(answers => console.log(answers))

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();