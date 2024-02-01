import { navigateUp } from './commands/up.js';
import { changeDirectory } from './commands/cd.js';
import { handleUnsupportedCommand } from './commands/unsupported.js';

export const processUserInput = (input) => {
    const [command, ...args] = input.split(' ');
    switch (command) {
        case 'up':
            navigateUp();
            break;
        case 'cd':
            changeDirectory(args[0]);
            break;
        default:
            handleUnsupportedCommand();
    }
};
