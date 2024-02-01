import { homedir } from 'os';
import path from 'path';
import fs from 'fs';

import { handleUnsupportedCommand } from './commands/unsupported.js';

export let currentWorkingDirectory = homedir();

export const printWorkingDirectory = () => {
    console.log(`You are currently in ${currentWorkingDirectory}`);
};

export const up = () => {
    currentWorkingDirectory = path.resolve(currentWorkingDirectory, '..');
};

export const cd = (newPath) => {
    fs.existsSync(newPath) && fs.statSync(newPath).isDirectory()
        ? currentWorkingDirectory = newPath
        : handleUnsupportedCommand();
};
