import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import stream from 'stream/promises';

import { handleFailedOperation } from '../loggers/failed-operation.js';
import { pathResolve } from '../helpers/path-resolve.js';
import { printHash } from '../loggers/hash.js';

export const calculateFileHash = async (pathToFile) => {
    try {
        const hash = createHash('sha256');
        const fileContent = createReadStream(pathResolve(pathToFile));

        await stream.pipeline(
            fileContent,
            hash
        )

        printHash(hash.digest('hex'));
    } catch {
        handleFailedOperation();
    }
};
