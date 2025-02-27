import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add to your Todos?",
            validate: (input) => {
                if (!input.trim()) {
                    return "Input cannot be empty!";
                }
                return true;
            }
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Would you like to add more to your todos?",
            default: true
        }
    ]);
    todos.push(todoQuestions.firstQuestion);
    console.log(chalk.yellow(todos));
    console.log(chalk.green("Todo added successfully!"));
    console.log(chalk.blue("Current todos:"), todos);
    condition = todoQuestions.secondQuestion;
}
