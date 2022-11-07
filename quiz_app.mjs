import inquirer from "inquirer";

import readlineSync from "readline-sync";

console.log("Welcome to the Quiz");
let username = readlineSync.question("What's your Name: ");
console.log("Hello", username, ", Let's strat the Quiz!");

var mcqList = [
  {
    type: "list",
    name: "q1",
    message: "Which language runs in a web browser?",
    choices: ["Java", "C", "Python", "JavaScript"],
    filter(val) {
      return val.toLowerCase();
    },
    correct: "javaScript",
  },
  {
    type: "list",
    name: "q2",
    message: "What does CSS stand for?",
    choices: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    filter(val) {
      return val.toLowerCase();
    },
    correct: "cascading style sheets",
  },
  {
    type: "list",
    name: "q3",
    message: "What does HTML stand for?",
    choices: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    filter(val) {
      return val.toLowerCase();
    },
    correct: "Hypertext Markup Language",
  },
  {
    type: "list",
    name: "q4",
    message: "What year was JavaScript launched?",
    choices: ["1996", "1995", "1994", "none of the above"],
    filter(val) {
      return val.toLowerCase();
    },
    correct: "1995",
  },
];
let score = 0;
let lists = [];
inquirer.prompt(mcqList).then((answers) => {
  lists.push(JSON.stringify(answers, null, " "));

  let anslist = Object.values(JSON.parse(lists));
  for (let i = 0; i < anslist.length; i++) {
    if (mcqList[i].correct === anslist[i]) {
      score += 1;
    }
  }

  console.log(`Your Score is ${score.toString()}`);
  console.log("---------------------------------");
  console.log("Your select following options: ");
  for (let i = 0; i < anslist.length; i++) {
    console.warn(anslist[i]);
  }
  console.log("---------------------------------");

  console.log("Correct Options are: ");
  for (let i = 0; i < mcqList.length; i++) {
    console.info(mcqList[i].correct);
  }
});
