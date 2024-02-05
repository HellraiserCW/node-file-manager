import fs from 'fs/promises';

import { handleFailedOperation } from '../loggers/failed-operation.js';
import { pathResolve } from '../helpers/path-resolve.js';

export const deleteFile = async (pathToFile) => {
    try {
        await fs.unlink(pathResolve(pathToFile));
    } catch {
        handleFailedOperation();
    }
};

