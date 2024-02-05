import os from 'os';

export const getEOL = () => console.log(`End-Of-Line (EOL): ${JSON.stringify(os.EOL)}`);
