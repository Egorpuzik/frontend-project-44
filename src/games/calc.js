import runGame from '../index.js';

const description = 'What is the result of the expression?';

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
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const operations = ['+', '-', '*'];
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const operator = operations[getRandomInt(0, operations.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));
  return [question, correctAnswer];
};

const startGame = () => runGame(description, generateRound);

export default startGame;
