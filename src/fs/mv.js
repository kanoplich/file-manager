import { access, constants, unlink } from 'fs/promises';
import { createWriteStream, createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { join } from 'path';

export const mv = async (pathFrom, path) => {
  await access(pathFrom, constants.F_OK);
  await access(path, constants.F_OK)
  const file = pathFrom.split('/').reverse()[0];
  const pathTo = join(path, file);

  const readStream = createReadStream(pathFrom);
  const writeStream = createWriteStream(pathTo);

  await pipeline(readStream, writeStream);
  await unlink(pathFrom);
};