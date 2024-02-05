export const getUsername = () => {
    const isUsernameArg = process.argv.slice(2).find((arg) => arg.startsWith('--username'));

    return isUsernameArg?.split('=').pop() || 'Guest';
};
