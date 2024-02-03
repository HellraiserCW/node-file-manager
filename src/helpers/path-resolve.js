import path from 'path';

import { currentWorkingDirectory } from '../services/working-directory.js';

export const pathResolve = (pathTo) => path.resolve(currentWorkingDirectory, pathTo);
