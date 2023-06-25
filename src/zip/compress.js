import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream/promises';

export const compress = async (pathFrom, pathTo) => {
  try {
    const source = createReadStream(pathFrom);
    const brZip = createBrotliCompress();
    const destination = createWriteStream(`${pathTo}.br`);

    await pipeline(source, brZip, destination);
  } catch(err) {
    console.log(err);
    console.log('Operation failed');
  }
}