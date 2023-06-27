import { readdir } from 'fs/promises';

export const ls = async () => {
  const path = process.cwd();
  const files = await readdir(path, { withFileTypes: true });

  const data = files.map((item) => ({'Name': item.name, 'Type': item.isFile() ? 'file' : 'directory'}));
  const result = data.sort((a, b) => a.Name < b.Name ? 1 : -1).sort((a, b) => a.Type > b.Type ? 1 : -1);

  console.table(result);
};