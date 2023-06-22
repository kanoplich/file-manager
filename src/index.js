import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import { getUserName } from './cli/args.js';
import { homedir } from 'os';

const username = getUserName();

const rl = readline.createInterface({ input, output });

console.log(`Welcome to the File Manager, ${username}!\n`);
console.log(`You are currently in ${homedir()} \n`);

rl.on('line', (input) => {
  try {
    if(input === '.exit') rl.close();
    console.log(`You are currently in ${process.cwd()}, \n`);
  } catch {
    console.log('Operation failed');
  }
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
});
