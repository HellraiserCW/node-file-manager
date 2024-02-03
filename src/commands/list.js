import fs from 'fs/promises';

import { currentWorkingDirectory } from '../services/working-directory.js';
import { handleFailedOperation } from '../loggers/failed-operation.js';
import { pathJoin } from '../helpers/path-join.js';

export const listDirectoryContents = async () => {
    try {
        const contents = await fs.readdir(currentWorkingDirectory);

        const rows = await Promise.all(contents.map(async (itemName) => {
            const itemStats = await fs.stat(pathJoin(itemName));

            const itemType = itemStats.isDirectory() ? 'directory' : 'file';
            return { Name: itemName, Type: itemType };
        }));

        rows.sort((a, b) => {
            return a.Type === b.Type
                ? a.Name.localeCompare(b.Name)
                : a.Type.localeCompare(b.Type);
        });

        console.table(rows, ['Name', 'Type']);
    } catch {
        handleFailedOperation();
    }
};
