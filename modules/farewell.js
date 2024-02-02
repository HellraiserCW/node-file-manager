import { username } from './username.js';

export const farewell = () => {
    console.log(
        '\x1b[36m',
        `Thank you for using File Manager, ${username}, goodbye!`,
        '\x1b[0m'
    );
};
