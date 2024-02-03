import readline from 'readline/promises';

import { processUserInput } from './services/process-user-input.js';
import { printWorkingDirectory } from './loggers/directory.js';
import { printFarewell } from './loggers/farewell.js';
import { printGreeting } from './loggers/greeting.js';

export const appStart = () => {
    printGreeting();

    printWorkingDirectory();

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.prompt();

    rl.on('line', async (line) => {
        line.trim() === '.exit'
            ? rl.close()
            : (
                await processUserInput(line),
                    printWorkingDirectory(),
                    rl.prompt()
            );
    });

    rl.on('close', printFarewell);
};
