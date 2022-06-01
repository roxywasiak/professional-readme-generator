//1 import inquirer library//
const inquirer = require("inquirer");

//2 my questions to prompt the user //need the readme guide first
const mainQuestions = [
  {
    type: "input",
    name: "Title",
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
    name: "Usage",
    message: "How do you use your application",
  },
  {
    type: "list",
    name: "Licence",
    message: "Does your project require a license?",
  },
  {
    type: "input",
    name: "Contributers",
    messages: "Please enter any contributers",
  },
  {
    type: "input",
    name: "Tests",
    message: "Enter the test process for your application",
  },
  {
    type: "input",
    name: "Email",
    message: "Please enter your email",
  },
];

// 3. declare your init function to ask questions
const init = async () => {
  // get answers for first set of questions
  const answers = await inquirer.prompt(questions);

  // display answers
  console.log(answers);
};

// 4. start your application
init();
