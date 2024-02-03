import path from 'path';
import fs from 'fs';
import { pipeline } from 'stream/promises';

import { handleFailedOperation } from '../loggers/failed-operation.js';
import { pathResolve } from '../helpers/path-resolve.js';

export const copyFile = async (pathToFile, newFileName) => {
    try {
        const fullSourcePath = pathResolve(pathToFile);
        const fullDestinationPath = path.resolve(newFileName, path.basename(fullSourcePath));

        const readStream = fs.createReadStream(fullSourcePath);
        const writeStream = fs.createWriteStream(fullDestinationPath);

        await pipeline(
            readStream,
            writeStream
        );
    } catch {
        handleFailedOperation();
    }
};
