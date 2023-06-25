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
  const [command, path, newName] = line.split(' ');

  switch (command) {
    case 'up':
      up();
      break;
    case 'cd':
      await cd(url, path);
      break;
    case 'ls':
      await ls();
      break;
    case 'cat':
      await cat(url, path);
      break;
    case 'add':
      await add(url, path);
      break;
    case 'rn':
      await rn(path, newName);
      break;
    case 'cp':
      await cp(path, newName);
      break;
    case 'mv':
      await mv(path, newName);
      break;
    case 'rm':
      await rm(path);
      break;
    case 'os':
      systemInfo(path);
      break;
    case 'hash':
      await calculateHash(path);
      break;
    case 'compress':
      await compress(path, newName);
      break;
    case 'decompress':
      await decompress(path, newName)
      break;
    default:
      console.log('Invalid input');
      break;
  }
}