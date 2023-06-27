import { createHash } from 'crypto';
import { readFile, access, constants } from 'fs/promises';

export const calculateHash = async (path) => {
  await access(path, constants.F_OK);
  const data = await readFile(path);
  const hash = createHash('sha256').update(data).digest('hex');
  console.log(hash);
};