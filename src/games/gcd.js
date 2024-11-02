import runGame from '../index.js';
import getRandomInt from '../utils.js';

const gcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num2 !== 0) {
    [num1, num2] = [num2, num1 % num2];
  }
  return num1;
};

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return [question, correctAnswer];
};

export default () => runGame(description, generateRound);
