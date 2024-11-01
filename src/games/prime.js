// src/games/prime.js
import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const description = 'Answer "yes" if the given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playGame = () => runGame(description, generateRound);

export default playGame;
