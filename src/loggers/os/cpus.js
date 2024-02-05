import os from 'os';

export const getCPUs = () => {
    const cpus = os.cpus().map((cpu) => ({
        'Model': cpu.model.trim(),
        'Clock rate (GHz)': (cpu.speed / 1000).toFixed(3),
    }));

    console.log(`Total number of CPUs: ${cpus.length}`);
    console.table(cpus);
};
