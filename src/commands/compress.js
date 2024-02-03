import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream/promises';

import { handleFailedOperation } from '../loggers/failed-operation.js';
import { pathResolve } from '../helpers/path-resolve.js';

export const compressFile = async (sourceFilePath, destinationFilePath) => {
    try {
        const readStream = createReadStream(pathResolve(sourceFilePath));
        const writeStream = createWriteStream(pathResolve(destinationFilePath));
        const compressStream = createBrotliCompress();

        await pipeline(
            readStream,
            compressStream,
            writeStream
        );
    } catch {
        handleFailedOperation();
    }
};
