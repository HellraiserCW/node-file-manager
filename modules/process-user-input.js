import { handleUnsupportedCommand } from './commands/unsupported.js';
import { navigateUp } from './commands/up-dir.js';
import { changeDirectory } from './commands/change-dir.js';
import { listDirectoryContents } from './commands/list.js';
import { readFileContent } from './commands/read.js';
import { createEmptyFile } from './commands/add.js';
import { renameFile } from './commands/rename.js';

export const processUserInput = async (input) => {
    const [command, ...args] = input.split(' ');
    switch (command) {
        case 'up':
            navigateUp();
            break;
        case 'cd':
            await changeDirectory(args[0]);
            break;
        case 'ls':
            await listDirectoryContents();
            break;
        case 'cat':
            await readFileContent(args[0]);
            break;
        case 'add':
            await createEmptyFile(args[0]);
            break;
        case 'rn':
            await renameFile(args[0], args[1]);
            break;
        default:
            handleUnsupportedCommand();
    }
};
