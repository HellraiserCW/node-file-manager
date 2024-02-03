import { getEOL } from '../loggers/os/eol.js';
import { getCPUs } from '../loggers/os/cpus.js';
import { getHomeDirectory } from '../loggers/os/home-dir.js';
import { getCurrentUsername } from '../loggers/os/username.js';
import { getCPUArchitecture } from '../loggers/os/architecture.js';
import { handleInvalidInput } from '../loggers/invalid-input.js';

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
            handleInvalidInput();
    }
};
