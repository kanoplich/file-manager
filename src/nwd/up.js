import { dirname } from 'path'

export const up = () => {
  const path = dirname(process.cwd());
  process.chdir(path);
}