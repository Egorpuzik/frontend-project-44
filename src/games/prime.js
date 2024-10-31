// src/games/prime.js
import runGame from '../index.js';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const description = 'Answer "yes" if the given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playGame = () => runGame(description, generateRound);

export default playGame;
