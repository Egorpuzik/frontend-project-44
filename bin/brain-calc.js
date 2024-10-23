#!/usr/bin/env node

const readlineSync = require('readline-sync');

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Неизвестный оператор: ${operator}`);
  }
};

const playCalcGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  const operations = ['+', '-', '*'];
  const roundsToWin = 3;
  for (let round = 1; round <= roundsToWin; round += 1) {
    const num1 = getRandomInt(1, 20);
    const num2 = getRandomInt(1, 20);
    const operator = operations[getRandomInt(0, operations.length - 1)];

    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = calculate(num1, num2, operator);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

playCalcGame();
