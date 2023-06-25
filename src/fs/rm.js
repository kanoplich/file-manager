import { access, constants, rm as del } from 'fs/promises'

export const rm = async (path) => {
  await access(path, constants.F_OK);
  await del(path);
}