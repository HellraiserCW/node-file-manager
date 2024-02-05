const isEmpty = (value) => value === undefined || value === '';

export const validateArguments = (...args) => !args.some(isEmpty);
