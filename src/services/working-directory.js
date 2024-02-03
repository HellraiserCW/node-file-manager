import { homedir } from 'os';
import path from 'path';
import fs from 'fs/promises';

import { handleFailedOperation } from '../loggers/failed-operation.js';

export let currentWorkingDirectory = homedir();

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
