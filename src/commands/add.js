import fs from 'fs/promises';

import { handleFailedOperation } from '../loggers/failed-operation.js';
import { pathJoin } from '../helpers/path-join.js';

export const createFile = async (newFileName) => {
    try {
        await fs.writeFile(pathJoin(newFileName), '', { flag: 'wx' });
    } catch {
        handleFailedOperation();
    }
};
