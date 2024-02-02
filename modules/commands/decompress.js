import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';

import { currentWorkingDirectory } from '../working-directory.js';
import { handleFailedOperation } from './failed.js';

export const decompressFile = async (sourcePath, destinationPath) => {
    try {
        const fullInputFilePath = path.resolve(currentWorkingDirectory, sourcePath);
        const readStream = createReadStream(fullInputFilePath);
        const writeStream = createWriteStream(destinationPath);
        const decompressStream = createBrotliDecompress();

        await readStream.pipe(decompressStream).pipe(writeStream);
    } catch {
        handleFailedOperation();
    }
};
