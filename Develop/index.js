// TODO: Include packages needed for this application
//Added Json.
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		name: 'username',
		message: 'Your Github username',
	},
	{
		type: 'input',
		name: 'email',
		message: 'Your email address',
	},
	{
		type: 'input',
		name: 'project',
		message: "Your project's name",
	},
	{
		type: 'input',
		name: 'description',
		message: 'Description of your project',
	},
	{
		type: 'input',
		name: 'licence',
		message: 'Licence of your project',
	},
	{
		type: 'input',
		name: 'command',
		message: 'Which command should be run to install dependancies',
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
const readmeContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
