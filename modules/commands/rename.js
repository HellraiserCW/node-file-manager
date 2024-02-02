import path from 'path';
import fs from 'fs/promises';

import { currentWorkingDirectory } from '../working-directory.js';
import { handleFailedOperation } from './failed.js';

export const renameFile = async (oldPath, newName) => {
    try {
        const fullOldPath = path.resolve(currentWorkingDirectory, oldPath);
        const fullNewPath = path.resolve(path.dirname(fullOldPath), newName);

        await fs.rename(fullOldPath, fullNewPath);
    } catch {
        handleFailedOperation();
    }
};
