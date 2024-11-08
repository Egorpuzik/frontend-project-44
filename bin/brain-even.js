#!/usr/bin/env node
import playGame from '../src/index.js';
import getEvenGameData from '../src/games/even.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
playGame(gameDescription, getEvenGameData);
