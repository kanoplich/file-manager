import * as os from 'os';

export const systemInfo = (command) => {
  switch (command) {
    case '--EOL':
      const eol = JSON.stringify(os.EOL);
      console.log(eol);
      break;
    case '--cpus':
      const data = os.cpus();
      const result = data.map(({model, speed}) => ({ model: model, speed: Math.round(speed/1000) }));
      console.log(result);
      break;
    case '--homedir':
      const homedir = os.homedir();
      console.log(homedir);
      break;
    case '--username':
      const info = os.userInfo();
      console.log(info.username);
      break;
    case '--architecture':
      const arch = os.arch();
      console.log(arch);
      break;
    default:
      console.log('Invalid input');
      break;
  }
}