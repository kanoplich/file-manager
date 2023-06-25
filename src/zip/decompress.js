import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';

export const decompress = async (pathFrom, pathTo) => {
  try {
    const source = createReadStream(pathFrom);
    const brUnZip = createBrotliDecompress();
    const destination = createWriteStream(pathTo);

    await pipeline(source, brUnZip, destination);
  } catch {
    console.log('Operation failed');
  }
}