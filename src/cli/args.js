import { argv } from 'process';

export const getUserName = () => {
  const userName = argv.slice(2).join(' ').split('=')[1];

  return userName.trim().length > 0 ? userName : 'Anonymous';
};