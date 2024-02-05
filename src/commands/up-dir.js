import path from 'path';

import { currentWorkingDirectory, upDir } from '../services/working-directory.js';

export const navigateUp = () => (currentWorkingDirectory !== path.parse(currentWorkingDirectory).root) && upDir();
