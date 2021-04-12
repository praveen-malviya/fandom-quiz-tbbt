const chalk = require('chalk');
var readlineSync = require('readline-sync');

var userName = readlineSync.question(chalk.cyan('Hi there please tell us you name..  '))

console.log("******************************************")
console.log("Hi " + userName.toUpperCase() + ", Good to see you here, Hope You're doing well.");
console.log("")

//************** */

var gameRule = function () {
    console.log(" ");
    console.log(chalk.blue.underline("This is a 15 Questions Quiz And It Has 3 Levels."));
    console.log(" ");
    console.log(chalk.red.dim(" Level-1: Question 1 to 5."));
    console.log(chalk.red.dim(" Level-2: Question 6 to 10."));
    console.log(chalk.red.dim(" Level-3: Question 11 to 15."));
    console.log(" ");

    if (readlineSync.keyInYN(chalk.yellow("    So Let this Game Begain are you ready"))) {
        for (i = 0; i < questions.length; i++) {
            theQuiz(questions[i].question, questions[i].answer);
        }
    } else {
        console.log("What happened not yet Ready read the rules again and start over.");
        console.log(" ");
    }
}

var score = 0;


var theQuiz = function (question, answer) {
    console.log("");
    var userAnswer = readlineSync.question(chalk.blue(question));
    if (answer == userAnswer.toUpperCase()) {
        console.log(chalk.green("You're Right"));
        score = score + 1;
    } else {
        console.log(chalk.red("Sorry Wrong Answer. The Right Answer Was " + answer + "."));
    }

}



var questions = [{
        question: "Who Was Sheldon's Roommate In The Show? ",
        answer: "LEONARD"
    },
    {
        question: "Who Was The Owner Of The Comic Book Store? ",
        answer: "STUART"
    },
    {
        question: "What Was The Name Of Sheldon's Girlfriend? ",
        answer: "AMY"
    },
    {
        question: "From Which University Howard Got His Master's? ",
        answer: "MIT"
    },
    {
        question: "What Was Raj's Surname? ",
        answer: "KOOTHRAPPALI"
    },
    {
        question: "With Whom was Penny married? ",
        answer: "ZACK"
    },
    {
        question: "What is Penny’s Age Of Conan character called? ",
        answer: "QUEEN PENELOPE"
    },
    {
        question: "What is the name of the Show Amy and Sheldon create? ",
        answer: "FUN WITH FLAGS"
    },
    {
        question: "Sheldon had a pet cat when he was a kid. What was the name of the cat? ",
        answer: "EINSTEIN"
    },
    {
        question: "What is Bernadette and Howard’s baby’s name?? ",
        answer: "HALLEY"
    },
    {
        question: "What was Bernadette’s middle name? ",
        answer: "MARYANN"
    },
    {
        question: "Sheldon Cooper has oatmeal for breakfast on which day? ",
        answer: "TUESDAY"
    },
    {
        question: "What does Sheldon’s mom call him? ",
        answer: "SHELLY"
    },
    {
        question: "Who is the first woman Raj can speak to without drinking first? ",
        answer: "PENNY"
    },
    {
        question: "What astronaut nickname was Howard given by his space friends? ",
        answer: "FRUIT LOOPS"
    },
]


if (readlineSync.keyInYN("Would You Like To Check If You Are A True" + chalk.blue.bold(" THE BIG BANG THEORY") + " Fan")) {
    gameRule();

    console.log(" ");
    console.log(chalk.green("Your final is score " + score));
    console.log(" ");
} else {
    console.log("Well it means you have not watched it yet! It's available on NETFLIX bing watch and take the quiz later.");
    console.log("");
}