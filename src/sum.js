export const sum = (...args) => {
  return args.reduce((prev, next, index) => {
    if (isNaN(prev)) {
      throw new Error(`Invalid value at position ${index}`);
    }
    return prev + next;
  }, 0);
};
