// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: "
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process if any: ",
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project usage for?"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this projects?"
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test included?"
    },
    {
        type: "input",
        name: "questions",
        message: "What do I do if I have an issue? "
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }
];

function generateReadme(answers) {
    return `
<h1 align="center">${answers.projectTitle}</h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-blueviolet)<br />
## Description
🔍 ${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
💾 ${answers.installation}
## Usage
💻 ${answers.usage}

## License
[![badge](https://img.shields.io/badge/license-${answers.license}-blueviolet)](https://opensource.org/licenses/${answers.license})

<br />
This application is covered by the ${answers.license} license.

## Contributing
👪 ${answers.contributing}

## Tests
✏️ ${answers.tests}

## Questions
✋ ${answers.questions}<br />
<br />
:octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
✉️ Email me with any questions: ${answers.email}<br /><br />
_This README was generated with ❤️ by [Khanh Ha](https://github.com/nguyendinhkhanhha296/READMEgenerator) 🔥🔥🔥
    `;
}
  
// TODO: Create a function to write README file
function writeToFile(data) {
    const filename = "/Users/khanhshafx/Documents/readme/dist/README.md";

    fs.writeFile(filename, data, function (err) {
        err ? console.log(err) : console.log(filename + " created!")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile(generateReadme(answers));
        });
}

// Function call to initialize app
init();
