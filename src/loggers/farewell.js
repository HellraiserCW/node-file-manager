import { getUsername } from '../helpers/username.js';

export const printFarewell = () => {
    console.log(
        '\x1b[36m',
        `Thank you for using File Manager, ${getUsername()}, goodbye!`,
        '\x1b[0m'
    );
};
