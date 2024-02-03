export const validateArguments = (...args) => {
    const isEmpty = (value) => value === undefined || value === '';

    return !(
        (args.length === 1 && isEmpty(args[0]))
        || args.length === 2 && (isEmpty(args[0]) || isEmpty(args[1]))
    );
};
