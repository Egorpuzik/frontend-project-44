#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomInt } from './utils.js'; 

const progressionLength = 10;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const runGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  for (let round = 0; round < 3; round += 1) {
    const start = randomInt(1, 10);
    const step = randomInt(1, 5);
    const progression = generateProgression(start, step, progressionLength);

    const hiddenIndex = randomInt(0, progressionLength - 1);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    const question = progression.join(' ');
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

runGame();
