export const username = process.argv
    .find((arg) => arg.startsWith('--username'))
    .split('=')
    .slice(1);
