import { changeDir } from '../services/working-directory.js';
import { pathResolve } from '../helpers/path-resolve.js';

export const changeDirectory = async (pathToDirectory) => {
    await changeDir(pathResolve(pathToDirectory));
};
