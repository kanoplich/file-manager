import { rename, access, constants } from 'fs/promises';

export const rn = async (oldPath, newName) => {
  await access(oldPath, constants.F_OK);
  const array = oldPath.split('/');
  array.splice(-1, 1, newName);
  const newPath = array.join('/');

  await rename(oldPath, newPath);
}