export const getUsername = () => {
    const isCustomNameArg = process.argv.slice(2).find((arg) => arg.startsWith('--username'));

    return isCustomNameArg?.split('=').pop() || 'Guest';
};
