import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = Math.floor(Math.random() * 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGame(description, generateRound);
