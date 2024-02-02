import { copyFile } from './copy.js';
import { deleteFile } from './delete.js';

export const moveFile = async (sourcePath, destinationPath) => {
    await copyFile(sourcePath, destinationPath);
    await deleteFile(sourcePath); // TODO fix double error message if fails
};
