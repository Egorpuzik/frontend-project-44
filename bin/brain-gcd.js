#!/usr/bin/env node
import runGame from '../src/index.js'; 
import { generateRandomNumber } from '../src/utils.js'; 

const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const num1 = generateRandomNumber(1, 100);
  const num2 = generateRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2)); 
  return [question, correctAnswer];
};

runGame(description, generateRound);
