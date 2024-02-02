import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';

import { currentWorkingDirectory } from '../working-directory.js';
import { handleFailedOperation } from './failed.js';

export const calculateFileHash = async (filePath) => {
    try {
        const fullFilePath = path.resolve(currentWorkingDirectory, filePath);
        const hash = crypto.createHash('sha256');
        const fileContent = await fs.readFile(fullFilePath);

        hash.update(fileContent);
        console.log(hash.digest('hex'));
    } catch {
        handleFailedOperation();
    }
};
// TODO rewrite with read stream
