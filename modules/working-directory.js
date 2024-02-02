import { homedir } from 'os';
import path from 'path';
import fs from 'fs/promises';

import { handleFailedOperation } from './commands/failed.js';
import { username } from './username.js';

export let currentWorkingDirectory = homedir();

export const printWorkingDirectory = () => {
    console.log(
        '\x1b[32m',
        `You are currently in ${currentWorkingDirectory}`,
        '\x1b[0m'
        );
};

export const upDir = () => {
    currentWorkingDirectory = path.resolve(currentWorkingDirectory, '..');
};

export const changeDir = async (newPath) => {
    try {
        const stats = await fs.stat(newPath);

        if (stats.isDirectory()) {
            currentWorkingDirectory = newPath;
        }
    } catch {
        handleFailedOperation();
    }
};
