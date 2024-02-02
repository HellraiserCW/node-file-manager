import os from 'os';

import { handleUnsupportedCommand } from './unsupported.js';
import { handleFailedOperation } from './failed.js';

const getEOL = () => {
    console.log(`End-Of-Line (EOL): ${os.EOL}`);
};

const getCPUs = () => {
    const cpus = os.cpus().map((cpu) => ({
        Model: cpu.model,
        'Clock rate (GHz)': (cpu.speed / 1000).toFixed(2),
    }));

    console.log(`Total number of CPUs: ${cpus.length}`);
    console.table(cpus, ['Model', 'Clock rate (GHz)']);
};

const getHomeDirectory = () => {
    console.log(`Home Directory: ${os.homedir()}`);
};

const getCurrentUsername = () => {
    console.log(`Current System User: ${os.userInfo().username}`);
};

const getCPUArchitecture = () => {
    console.log(`CPU Architecture: ${process.arch}`);
};

export const getOSInfo = (argument) => {
    switch (argument) {
        case '--EOL':
            getEOL();
            break;
        case '--cpus':
            getCPUs();
            break;
        case '--homedir':
            getHomeDirectory();
            break;
        case '--username':
            getCurrentUsername();
            break;
        case '--architecture':
            getCPUArchitecture();
            break;
        default:
            handleFailedOperation();
    }
};
