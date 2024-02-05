import fs from 'fs';

import { handleFailedOperation } from '../loggers/failed-operation.js';
import { pathResolve } from '../helpers/path-resolve.js';

export const readFileContent = async (pathToFile) => {
    try {
        const readStream = fs.createReadStream(pathResolve(pathToFile), 'utf8');
        readStream.pipe(process.stdout);

        await new Promise((resolve, reject) => {
            readStream.on('end', resolve);
            readStream.on('error', reject);
        });
    } catch {
        handleFailedOperation();
    }
};
