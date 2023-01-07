// TODO: Include packages needed for this application
//Added Json.
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
	//check this array as an example 
	'1: MONTERO (Call Me By Your Name)',
  '2: Peaches (feat. Daniel Caesar & Giveon)',
  '3: Kiss Me More (feat. SZA)',
  '4: Astronaut In The Ocean',
  '5: Save Your Tears (with Ariana Grande) (Remix)',
  '6. RAPSTAR',
  '7. Levitating (feat. DaBaby)',
  '8. Leave The Door Open',
  '9. Botella Tras Botella',
  '10. Fiel',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	this.fileName = fileName;
	this.data = data;
}

const generateReadmeFile = ({ username, email, project, description, licence, command }) =>
`#${project} 
## Description
${description}

## Installation
${command}
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License
${licence}

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.`

inquirer
  .prompt([
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
  ])
  .then((answers) => {
    const readmePageContent = generateReadmeFile(answers);

    fs.writeFile('readme.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );
  });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
