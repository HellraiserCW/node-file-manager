import { homedir } from 'os';

export const printWorkingDirectory = () => {
    console.log(`You are currently in ${homedir()}`);
};
