import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';

import { handleFailedOperation } from './failed.js';
import { currentWorkingDirectory } from '../working-directory.js';

export const readFileContent = async (filePath) => {
    try {
        const readStream = fs.createReadStream(path.resolve(currentWorkingDirectory, filePath));

        await pipeline(
            readStream,
            process.stdout
        );
        // Check for Error: write EPIPE after successful reading
        // MaxListenersExceededWarning: Possible EventEmitter memory leak detected. after multiple successful reading
    } catch {
        handleFailedOperation();
    }
};
