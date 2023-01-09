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
		name: 'licence',
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );
}

// const generateReadmeFile = ({ username, email, project, description, licence, command }) =>
// `#${project} 
// ## Description
// ${description}

// ## Installation
// ${command}
// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

// ## Usage

// Provide instructions and examples for use. Include screenshots as needed.

// ## Credits

// List your collaborators, if any, with links to their GitHub profiles.

// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

// If you followed tutorials, include links to those here as well.

// ## License
// ${licence}

// ## Features

// If your project has a lot of features, list them here.

// ## How to Contribute

// If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

// ## Tests

// Go the extra mile and write tests for your application. Then provide examples on how to run them here.`



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
