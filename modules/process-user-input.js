import { handleUnsupportedCommand } from './commands/unsupported.js';
import { navigateUp } from './commands/up-dir.js';
import { changeDirectory } from './commands/change-dir.js';
import { listDirectoryContents } from './commands/list.js';
import { readFileContent } from './commands/read.js';
import { createFile } from './commands/add.js';
import { renameFile } from './commands/rename.js';
import { copyFile } from './commands/copy.js';
import { deleteFile } from './commands/delete.js';
import { moveFile } from './commands/move.js';
import { getOSInfo } from './commands/os.js';
import { calculateFileHash } from './commands/hash.js';

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
            await createFile(args[0]);
            break;
        case 'rn':
            await renameFile(args[0], args[1]);
            break;
        case 'cp':
            await copyFile(args[0], args[1]);
            break;
        case 'mv':
            await moveFile(args[0], args[1]);
            break;
        case 'rm':
            await deleteFile(args[0]);
            break;
        case 'os':
            getOSInfo(args[0]);
            break;
        case 'hash':
            await calculateFileHash(args[0]);
            break;
        default:
            handleUnsupportedCommand();
    }
};
