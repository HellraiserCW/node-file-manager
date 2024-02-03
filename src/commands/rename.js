import path from 'path';
import fs from 'fs/promises';

import { handleFailedOperation } from '../loggers/failed-operation.js';
import { pathResolve } from '../helpers/path-resolve.js';

export const renameFile = async (pathToFile, newFileName) => {
    try {
        const fullOldPath = pathResolve(pathToFile);
        const fullNewPath = path.resolve(path.dirname(fullOldPath), newFileName);

        await fs.rename(fullOldPath, fullNewPath);
    } catch {
        handleFailedOperation();
    }
};
