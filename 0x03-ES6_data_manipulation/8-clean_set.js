const cleanSet = (set, startString) => {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((parametro) => parametro !== undefined && parametro.startsWith(startString))
    .map((parametro) => parametro.slice(startString.length))
    .join('-');
};

export default cleanSet;
