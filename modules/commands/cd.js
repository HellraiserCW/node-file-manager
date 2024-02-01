import path from 'path';
import { cd, currentWorkingDirectory } from '../working-directory.js';
import { handleUnsupportedCommand } from './unsupported.js';

export const changeDirectory = (targetDirectory) => {
    if (!targetDirectory) {
        return handleUnsupportedCommand();
    }
    const newPath = path.resolve(currentWorkingDirectory, targetDirectory);

    cd(newPath);
};
