import { homedir } from 'os';
import path from 'path';
import fs from 'fs/promises';

import { handleFailedOperation } from './commands/failed.js';

export let currentWorkingDirectory = homedir();

export const printWorkingDirectory = () => {
    console.log(`You are currently in ${currentWorkingDirectory}`);
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
    } finally {
        printWorkingDirectory();
    }
};
