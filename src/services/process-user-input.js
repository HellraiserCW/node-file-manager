import { navigateUp } from '../commands/up-dir.js';
import { changeDirectory } from '../commands/change-dir.js';
import { listDirectoryContents } from '../commands/list.js';
import { readFileContent } from '../commands/read.js';
import { createFile } from '../commands/add.js';
import { renameFile } from '../commands/rename.js';
import { copyFile } from '../commands/copy.js';
import { moveFile } from '../commands/move.js';
import { deleteFile } from '../commands/delete.js';
import { getOSInfo } from '../commands/os.js';
import { calculateFileHash } from '../commands/hash.js';
import { compressFile } from '../commands/compress.js';
import { decompressFile } from '../commands/decompress.js';
import { handleInvalidInput } from '../loggers/invalid-input.js';
import { validateArguments } from '../helpers/validate-args.js';

const commandMappings = {
    up: navigateUp,
    cd: async ([pathToDirectory]) => await validateAndExecute(validateArguments, changeDirectory, pathToDirectory),
    ls: listDirectoryContents,
    cat: async ([pathToFile]) => await validateAndExecute(validateArguments, readFileContent, pathToFile),
    add: async ([newFileName]) => await validateAndExecute(validateArguments, createFile, newFileName),
    rn: async ([pathToFile, newFileName]) => await validateAndExecute(validateArguments, renameFile, pathToFile, newFileName),
    cp: async ([pathToFile, pathToNewDir]) => await validateAndExecute(validateArguments, copyFile, pathToFile, pathToNewDir),
    mv: async ([pathToFile, pathToNewDir]) => await validateAndExecute(validateArguments, moveFile, pathToFile, pathToNewDir),
    rm: async ([pathToFile]) => await validateAndExecute(validateArguments, deleteFile, pathToFile),
    os: ([argument]) => getOSInfo(argument),
    hash: async ([pathToFile]) => await validateAndExecute(validateArguments, calculateFileHash, pathToFile),
    compress: async ([pathToFile, pathToDestination]) => await validateAndExecute(validateArguments, compressFile, pathToFile, pathToDestination),
    decompress: async ([pathToFile, pathToDestination]) => await validateAndExecute(validateArguments, decompressFile, pathToFile, pathToDestination)
};

const validateAndExecute = async (validationCallback, executionCallback, ...args) => {
    validationCallback(...args)
        ? await executionCallback(...args)
        : handleInvalidInput();
};

export const processUserInput = async (input) => {
    const [command, ...args] = input.split(' ');
    const executeFunction = commandMappings[command];

    executeFunction
        ? await executeFunction(args)
        : handleInvalidInput();
};
