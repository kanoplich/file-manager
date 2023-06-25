import { access, constants, rm as del } from 'fs/promises'

export const rm = async (path) => {
  try {
    await access(path, constants.F_OK);
    await del(path);
  } catch {
    console.log('Operation failed');
  }
}