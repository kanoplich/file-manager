import { access, constants } from 'fs/promises';
import { resolve } from 'path';

export const cd = async (url, path) => {
  try {
    const pathFile = resolve(url, `${path}/`);
    await access(pathFile, constants.F_OK);
    process.chdir(pathFile);
  } catch {
    console.log('Operation failed');
  }
}