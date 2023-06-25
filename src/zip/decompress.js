import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';
import { join } from 'path';

export const decompress = async (pathFrom, path) => {
  const file = pathFrom.split('/').reverse()[0].slice(0, -3);
  const pathTo = join(path, file);

  const source = createReadStream(pathFrom);
  const brUnZip = createBrotliDecompress();
  const destination = createWriteStream(pathTo);

  await pipeline(source, brUnZip, destination);
}