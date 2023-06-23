import { up } from "../nwd/up.js";
import { cd } from "../nwd/cd.js";
import { ls } from "../nwd/ls.js";
import { cat } from "../fs/cat.js";
import { add } from "../fs/add.js";

export const instructionFunc = async (line, url) => {
  const [command, path] = line.split(' ');

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
    case 'add': 
      await add(url, path);
      break;
    case 'cat':
      await cat(url, path);
      break;
    default:
      console.log('Invalid input');
      break;
  }
}