import { getEOL } from '../loggers/os/eol.js';
import { getCPUs } from '../loggers/os/cpus.js';
import { getHomeDirectory } from '../loggers/os/home-dir.js';
import { getCurrentUsername } from '../loggers/os/username.js';
import { getCPUArchitecture } from '../loggers/os/architecture.js';
import { handleInvalidInput } from '../loggers/invalid-input.js';

const osCommandsMapping = {
    '--EOL': getEOL,
    '--cpus': getCPUs,
    '--homedir': getHomeDirectory,
    '--username': getCurrentUsername,
    '--architecture': getCPUArchitecture
};

export const getOSInfo = (argument) => {
    const executeOSCommand = osCommandsMapping[argument];

    executeOSCommand
        ? executeOSCommand()
        : handleInvalidInput();
};
