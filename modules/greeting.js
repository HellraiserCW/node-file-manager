import { username } from './username.js';

export const greeting = () => {
    console.log(
        '\x1b[36m',
        `Welcome to the File Manager, ${username}!`,
        '\x1b[0m'
    );
};
