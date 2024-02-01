import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { greeting } from './modules/greeting.js';
import { printWorkingDirectory } from './modules/working-directory.js';
import { processUserInput } from './modules/process-user-input.js';
import { farewell } from './modules/farewell.js';

greeting();

printWorkingDirectory();

const rl = readline.createInterface({input, output});

rl.prompt();

rl.on('line', async (line) => {
    if (line.trim() === '.exit') {
        rl.close();
    } else {
        await processUserInput(line);
        rl.prompt();
    }
});

rl.on('close', farewell);
