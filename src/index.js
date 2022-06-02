//1 import inquirer library//
const inquirer = require("inquirer");
const fs = require("fs");

//2 my questions to prompt the user //need the readme guide first
const mainQuestions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "Description",
    message: "Enter a description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "Does your project require an installation process?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your application",
  },
  {
    type: "list",
    name: "license",
    message: "Does your project require a license?",
    choices: ["Apache", "GNU", "MIT", "No license"],
  },
  {
    type: "input",
    name: "contributors",
    messages: "Please enter any contributors",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter the test process for your application",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your GitHub email",
  },
];

const generateReadMe = (answers) => {
  //console.log("answers: " + JSON.stringify(answers));

  return `# Title: ${answers.title} ![MIT](https://img.shields.io/badge/${answers.license}-License-green)
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Description


${answers.title}

## Installation
Please follow the instructions below:
\`\`\`
${answers.installation}
\`\`\`
## Usage
Please follow the instructions below:
\`\`\`
${answers.usage}
\`\`\`
## License
${answers.license}

## Contributing
${answers.contributors}

## Tests
Please follow the instructions below:
\`\`\`
${answers.tests}
\`\`\`
## Questions
${answers.email}
`;
};

// 3. declare your init function to ask questions
const init = async () => {
  // 1. get answers for first set of questions
  const answers = await inquirer.prompt(mainQuestions);

  // 2. Generate the Readme
  const readMe = generateReadMe(answers);

  // 3. write to file generate readme
  fs.writeFileSync("generatedReadMe.md", readMe);
};

// 4. start your application
init();
