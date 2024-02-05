import { getUsername } from '../helpers/username.js';

export const printGreeting = () => {
    console.log(
        '\x1b[36m',
        `Welcome to the File Manager, ${getUsername()}!`,
        '\x1b[0m'
    );
};
