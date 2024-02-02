import path from 'path';

import { currentWorkingDirectory, upDir } from '../working-directory.js';

export const navigateUp = () => {
    if (currentWorkingDirectory !== path.parse(currentWorkingDirectory).root) {
        upDir();
    }
};
