import { writeFile } from 'fs/promises';

export const add = async (path) => {
  try {
    await writeFile(path, '', { flag: 'wx' });
  } catch {
    console.log('Operation failed');
  }
}