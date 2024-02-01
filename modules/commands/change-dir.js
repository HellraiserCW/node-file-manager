import path from 'path';
import { changeDir, currentWorkingDirectory, printWorkingDirectory } from '../working-directory.js';
import { handleUnsupportedCommand } from './unsupported.js';

export const changeDirectory = async (targetDirectory) => {
    if (!targetDirectory) {
        handleUnsupportedCommand();
        printWorkingDirectory();

        return;
    }
    const newPath = path.resolve(currentWorkingDirectory, targetDirectory);

    await changeDir(newPath);
};
