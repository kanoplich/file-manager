import { readdir } from 'fs/promises';

export const dataInDirectory = async (url) => {
  const files = await readdir(url, { withFileTypes: true });
  const result = files.map((item) => ({'Name': item.name, 'Type': item.isFile() ? 'file' : 'directory'}));

  console.table(result);
};