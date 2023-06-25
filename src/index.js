import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import { getUserName } from './cli/getUserName.js';
import { homedir } from 'os';
import { instructionFunc } from './instruction/instruction.js';
import { printURL } from './utils/utils.js';

const username = getUserName();
process.chdir(homedir());
const homeDir = process.cwd();

const rl = readline.createInterface({ input, output });

console.log(`Welcome to the File Manager, ${username}!\n`);
console.log(`You are currently in ${homeDir} \n`);

rl.on('line', async (input) => {
  const url = process.cwd();
  try {
    if(input === '.exit') rl.close();
    await instructionFunc(input, url);
    printURL();
  } catch {
    console.log('Operation failed');
  }
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
});
