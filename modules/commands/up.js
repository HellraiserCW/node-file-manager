import path from 'path';

import { currentWorkingDirectory, up } from '../working-directory.js';

export const navigateUp = () => {
    if (currentWorkingDirectory !== path.parse(currentWorkingDirectory).root) {
        up();
    }
};
