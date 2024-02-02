import path from 'path';
import fs from 'fs/promises';

import { currentWorkingDirectory } from '../working-directory.js';
import { handleFailedOperation } from './failed.js';

export const createFile = async (fileName) => {
    try {
        const filePath = path.join(currentWorkingDirectory, fileName);
        await fs.writeFile(filePath, '');
    } catch {
        handleFailedOperation();
    }
};
