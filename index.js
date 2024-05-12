#!/usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to quiz! ");
console.log("You are required to gain maximum 4 points for the window.");
let points = 0;
// question no.1
let question1 = await inquirer.prompt({
    type: "list",
    name: "one",
    message: "Which planet has the most moons?",
    choices: ["Mercury", "Earth", "Uranus", "Saturn"],
});
if (question1.one == "Saturn") {
    console.log("Your answer is correct!");
    points++;
}
else {
    console.log("Incorrect answer.");
}
// question no.2
let question2 = await inquirer.prompt({
    type: "list",
    name: "two",
    message: "Which country has won the most FIFA World Cups?",
    choices: ["Pakistan", "Brazil", "Germany", "Italy"],
});
if (question2.two == "Brazil") {
    console.log("Your answer is correct!");
    points++;
}
else {
    console.log("Incorrect answer.");
}
// questin no.3
let question3 = await inquirer.prompt({
    type: "list",
    name: "three",
    message: "How many bones do we have in an ear?",
    choices: ["2", "3", "4", "5"],
});
if (question3.three == "3") {
    console.log("Your answer is correct!");
    points++;
}
else {
    console.log("Incorrect answer.");
}
// questin no.4
let question4 = await inquirer.prompt({
    type: "list",
    name: "four",
    message: "What country has the most islands?",
    choices: ["Sweden", "Canada", "Thailand", "Maldives"],
});
if (question4.four == "Sweden") {
    console.log("Your answer is correct!");
    points++;
}
else {
    console.log("Incorrect answer.");
}
// questin no.5
let question5 = await inquirer.prompt({
    type: "list",
    name: "five",
    message: "How many hearts does an octopus have?",
    choices: ["5", "8", "3", "2"],
});
if (question5.five == "3") {
    console.log("Your answer is correct!");
    points++;
}
else {
    console.log("Incorrect answer.");
}
// questin no.6
let question6 = await inquirer.prompt({
    type: "list",
    name: "six",
    message: "What phone company produced the 3310?",
    choices: ["Apple", "Motorola", "Samsung", "Nokia"],
});
if (question6.six == "Nokia") {
    console.log("Your answer is correct!");
    points++;
}
else {
    console.log("Incorrect answer.");
}
if (points >= 4) {
    console.log("Congratulations!");
    console.log(`Your points: ${points}`);
}
else {
    console.log("You loss! better luck next time.");
    console.log(`Your points: ${points}`);
}
