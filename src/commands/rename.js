import path from 'path';
import fs from 'fs/promises';

import { handleFailedOperation } from '../loggers/failed-operation.js';
import { pathResolve } from '../helpers/path-resolve.js';

export const renameFile = async (pathToFile, newFileName) => {
    try {
        const resolvedPathSourceFile = pathResolve(pathToFile);
        const resolvedPathNewFile = path.resolve(path.dirname(resolvedPathSourceFile), newFileName);

        await fs.rename(resolvedPathSourceFile, resolvedPathNewFile);
    } catch {
        handleFailedOperation();
    }
};
