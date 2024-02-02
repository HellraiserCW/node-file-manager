import path from 'path';

import { changeDir, currentWorkingDirectory } from '../working-directory.js';
import { handleFailedOperation } from './failed.js';

export const changeDirectory = async (targetDirectory) => {
    if (!targetDirectory) {
        handleFailedOperation();

        return;
    }
    const newPath = path.resolve(currentWorkingDirectory, targetDirectory);

    await changeDir(newPath);
};
