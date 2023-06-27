import { writeFile } from 'fs/promises';

export const add = async (path) => {
  await writeFile(path, '', { flag: 'wx' });
}