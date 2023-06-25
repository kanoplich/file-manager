import { up } from "../nwd/up.js";
import { cd } from "../nwd/cd.js";
import { ls } from "../nwd/ls.js";
import { cat } from "../fs/cat.js";
import { add } from "../fs/add.js";
import { rn } from "../fs/rn.js";
import { cp } from "../fs/cp.js";
import { mv } from "../fs/mv.js";
import { rm } from "../fs/rm.js";
import { systemInfo } from "../os/systemInfo.js";
import { calculateHash } from "../hash/calculateHash.js";
import { compress } from "../zip/compress.js";
import { decompress } from "../zip/decompress.js";

export const instructionFunc = async (line, url) => {
  const array = line.match(/(?:[^\s"]+|"[^"]*")+/g);
  const [command, pathFrom, pathTo] = array.map(item => item.replace(/"/g, ''));

  switch (command) {
    case 'up':
      up();
      break;
    case 'cd':
      await cd(url, pathFrom);
      break;
    case 'ls':
      await ls();
      break;
    case 'cat':
      await cat(url, pathFrom);
      break;
    case 'add':
      await add(pathFrom);
      break;
    case 'rn':
      await rn(pathFrom, pathTo);
      break;
    case 'cp':
      await cp(pathFrom, pathTo);
      break;
    case 'mv':
      await mv(pathFrom, pathTo);
      break;
    case 'rm':
      await rm(pathFrom);
      break;
    case 'os':
      systemInfo(pathFrom);
      break;
    case 'hash':
      await calculateHash(pathFrom);
      break;
    case 'compress':
      await compress(pathFrom, pathTo);
      break;
    case 'decompress':
      await decompress(pathFrom, pathTo)
      break;
    default:
      console.log('Invalid input');
      break;
  }
}