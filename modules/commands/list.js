import fs from 'fs/promises';
import path from 'path';

import { currentWorkingDirectory, printWorkingDirectory } from '../working-directory.js';
import { handleFailedOperation } from './failed.js';

export const listDirectoryContents = async () => {
    try {
        const contents = await fs.readdir(currentWorkingDirectory);

        const rows = await Promise.all(contents.map(async (itemName) => {
            const itemPath = path.join(currentWorkingDirectory, itemName);
            const itemStats = await fs.stat(itemPath);

            const itemType = itemStats.isDirectory() ? 'directory' : 'file';
            return { Name: itemName, Type: itemType };
        }));

        rows.sort((a, b) => {
            if (a.Type === b.Type) {
                return a.Name.localeCompare(b.Name);
            } else {
                return a.Type.localeCompare(b.Type);
            }
        });

        console.table(rows, ['Name', 'Type']);
    } catch {
        handleFailedOperation();
    } finally {
        printWorkingDirectory();
    }
};
