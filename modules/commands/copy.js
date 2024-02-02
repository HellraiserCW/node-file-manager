import path from 'path';
import fs from 'fs';
import { pipeline } from 'stream/promises';

import { handleFailedOperation } from './failed.js';
import { currentWorkingDirectory } from '../working-directory.js';

export const copyFile = async (sourceFile, destinationPath) => {
    try {
        const fullSourcePath = path.resolve(currentWorkingDirectory, sourceFile);
        const fullDestinationPath = path.resolve(destinationPath, path.basename(fullSourcePath));
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
