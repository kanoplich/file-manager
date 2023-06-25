import { argv } from 'process';

export const getUserName = () => {
  const user = argv.slice(2).filter(item => item.includes('--username=')).join('').replace('--username=', '');

  return user.length > 0 ? user : 'Anonymous';
};