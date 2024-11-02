import runGame from '../index.js';
import getRandomInt from '../utils.js';

const progressionLength = 10;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const start = getRandomInt(1, 10);
  const step = getRandomInt(1, 5);
  const progression = generateProgression(start, step, progressionLength);

  const hiddenIndex = getRandomInt(0, progressionLength - 1);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

const playGame = () => runGame(description, generateRound);

export default playGame;
