import path from 'path';

import { currentWorkingDirectory } from '../services/working-directory.js';

export const pathJoin = (fileName) => path.join(currentWorkingDirectory, fileName);
