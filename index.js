// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                   console.log("Please enter your name!");
                   return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide some details about your project:'
        },
        {
            type: 'checkbox',
            name: 'installation',
            message: "What did you install to create this application? (Check all that apply)",
            choices: ['Node.js', ' inquirer']
        },
        {
            type: 'input',
            name: 'uses',
            message: 'How does someone use this application?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license(s) did you use? (Choose one)',
            choices: ['The MIT License', 'Apache License', 'GNU License', 'N/A'],
            validate: value => {
                if (value) {
                    return true;
                } else {
                    return "You must choose a value to continue";
                }
            },
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Who contributed to this project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Has there been any peer reviewed tests on this application?'
        },
        {
            type: 'input',
            name: 'github',
            message:'What is your gitHub username?'
        },
        {
            type: 'input',
            name: 'contact',
            message:'Please enter your email address, so that questions about this application can be sent your way.'
        }
    ];

const questionUser = () => {
    return inquirer.prompt(questions)
}

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./output/README.md", data, (err) => {
            if (err){
                reject(err);
                return;
            }
            resolve();
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    questionUser()
        .then((answers) => {
            return generateMarkdown(answers);
        })
        .then((READMEMarkdown) => {
            return writeToFile(READMEMarkdown)
        })
        .then((fileresponse) => {
            console.log(fileresponse);
        })
        .catch((err) => {
            console.log(err);
        });
}

// Function call to initialize app
init();