import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';

import { currentWorkingDirectory } from '../working-directory.js';
import { handleFailedOperation } from './failed.js';

export const compressFile = async (inputFilePath, outputFilePath) => {
    try {
        const fullInputFilePath = path.resolve(currentWorkingDirectory, inputFilePath);
        const readStream = createReadStream(fullInputFilePath);
        const writeStream = createWriteStream(outputFilePath);
        const compressStream = createBrotliCompress();

        await readStream.pipe(compressStream).pipe(writeStream);
    } catch {
        handleFailedOperation();
    }
};
