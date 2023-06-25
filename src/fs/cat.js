import { access, constants } from 'fs/promises';
import { resolve } from 'path';
import { createReadStream } from 'fs';
import { printURL } from '../utils/utils.js';

export const cat = async (url, path) => {

  try {
    const pathFile = resolve(url, path);
    await access(pathFile, constants.F_OK);

    const readFile = createReadStream(pathFile);
  
    await new Promise(() => {
      readFile.on('data', (chunk) => {
        process.stdout.write(chunk);
      });

      readFile.on('error', () => {
        console.log('Operation failed');
        printURL();
      });
    
      readFile.on('end', () => {
        console.log('');
        printURL();
      });
    });
  } catch {
    console.log('Operation failed');
  }
}