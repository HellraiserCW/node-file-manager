import os from 'os';

export const getCurrentUsername = () => console.log(`Current System User: ${os.userInfo().username}`);
