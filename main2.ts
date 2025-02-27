import inquirer from "inquirer";

let todos =[]
let condition = true;

while(condition)
{
let todoQuestions = await inquirer.prompt(
    [
    {
        name: "firstQuestion",
        type: "input",
        message:"What would you like to add to your Todos?",
        validate: (input: string) => {
            if (!input.trim()) {
              return "Input cannot be empty!";
            }
            return true;
          }
    },
    {
        name: "secondQuestion",
        type: "confirm",
        message:"Would you like to add more to your todos?",
        default: true
    }]
)

todos.push(todoQuestions.firstQuestion)
console.log(todos)
condition = todoQuestions.secondQuestion;
}