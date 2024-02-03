import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';

import { handleFailedOperation } from '../loggers/failed-operation.js';
import { pathResolve } from '../helpers/path-resolve.js';

export const decompressFile = async (sourceFilePath, destinationFilePath) => {
    try {
        const readStream = createReadStream(pathResolve(sourceFilePath));
        const writeStream = createWriteStream(pathResolve(destinationFilePath));
        const decompressStream = createBrotliDecompress();

        await pipeline(
            readStream,
            decompressStream,
            writeStream
        );
    } catch {
        handleFailedOperation();
    }
};
