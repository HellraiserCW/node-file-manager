import path from 'path';
import fs from 'fs/promises';

import { handleFailedOperation } from './failed.js';
import { currentWorkingDirectory } from '../working-directory.js';

export const deleteFile = async (filePath) => {
    try {
        const fullFilePath = path.resolve(currentWorkingDirectory, filePath);

        await fs.unlink(fullFilePath);
    } catch {
        handleFailedOperation();
    }
};
