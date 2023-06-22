import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const getFilePath = (url) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);

  return __dirname;
};