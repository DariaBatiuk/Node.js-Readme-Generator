// TODO: Include packages needed for this application
//Added Json.
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
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
		type: 'list',
		name: 'license',
		message: 'Licence of your project',
		choices: ['Apache', 'BSD', 'MIT']
	},
	{
		type: 'input',
		name: 'command',
		message: 'Which command should be run to install dependancies',
	},
	{
		type: 'input',
		name: 'test',
		message: 'Which command should be run to test the project',
	},
	{
		type: 'input',
		name: 'usage',
		message: 'The purpose or usage of the app',
	},
	{
		type: 'input',
		name: 'githubLink',
		message: 'Link to your Github profile',
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
	inquirer
  .prompt(questions)
  .then((answers) => {
    const readmePageContent = generateMarkdown(answers);
		writeToFile('readme.md', readmePageContent);
  });
}

// Function call to initialize app
init();
