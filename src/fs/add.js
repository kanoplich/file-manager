import { writeFile } from 'fs/promises';
import { resolve } from 'path';

export const add = async (url, path) => {
  try {
    const pathFile = resolve(url, path);
    await writeFile(pathFile, '');
  } catch {
    console.log('Operation failed');
  }
}