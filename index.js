const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./generateMarkdown');

//Prompting the user questions to generate their README.md file.
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter a description of your project. Why did you build your project? What problems did you solve and what did you learn along the way?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'List the programs and/or dependencies that are required to install and run this web application.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Provide instructions on how to use this program.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'How can other contribute to this project? What are the contribution guidlines?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'How is testing performed on your web application/project?',
            name: 'testing',
        },
        {
            type: 'list',
            message: 'Which type of license do you want to add to your project?',
            name: 'license',
            choices: ['MIT', 'ISC',],
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your e-mail address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'For licensing purposes, what year is your code being developed?',
            name: 'year',
        },
        {
            type: 'input',
            message: 'For licensing purposes, what is your full name?',
            name: 'fullname',
        },
    ])

    //The following functions gets the user's answers and places populates the information required for the README file, using the README file template.
    //Note: JSON.stringify is required to convert the answers, which is an object, into a string to populate the README file.
    .then(answers => {
        console.log(answers);
        fs.appendFile("README.md", generateMarkdown(answers) + '\n', err =>
            err ? console.error(err) : console.log("Success! Response added to file."));
    })

