import { currentWorkingDirectory } from '../services/working-directory.js';

export const printWorkingDirectory = () => {
    console.log(
        '\x1b[32m',
        `You are currently in ${currentWorkingDirectory}`,
        '\x1b[0m'
    );
};
