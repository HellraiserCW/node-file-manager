import { handleUnsupportedCommand } from './commands/unsupported.js';
import { navigateUp } from './commands/up-dir.js';
import { changeDirectory } from './commands/change-dir.js';
import { listDirectoryContents } from './commands/list.js';

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
        default:
            handleUnsupportedCommand();
    }
};
