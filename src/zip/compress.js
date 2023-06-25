import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream/promises';
import { join } from 'path';

export const compress = async (pathFrom, path) => {
  const file = pathFrom.split('/').reverse()[0];
  const pathTo = join(path, `${file}.br`);

  const source = createReadStream(pathFrom);
  const brZip = createBrotliCompress();
  const destination = createWriteStream(pathTo);

  await pipeline(source, brZip, destination);
}