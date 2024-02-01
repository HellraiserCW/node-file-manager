import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { printWorkingDirectory } from './modules/working-directory.js';
import { username } from './modules/username.js';

console.log(`Welcome to the File Manager, ${username}!`);

printWorkingDirectory();

const rl = readline.createInterface({input, output});

rl.prompt();

rl.on('line', (line) => {
    if (line.trim() === '.exit') {
        rl.close();
    } else {
        console.log(line);
        printWorkingDirectory();
        rl.prompt();
    }
});

rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
});
