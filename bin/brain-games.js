#!/usr/bin/env node
import readlineSync from 'readline-sync';

import greetUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
greetUser();
