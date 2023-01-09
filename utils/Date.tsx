export const getDate = (date: Date | undefined) => {
  if (date === undefined) {
    return undefined;
  }
  let d = new Date(date).toLocaleDateString();
  return d;
};

export const getTime = (date: Date | undefined) => {
  if (date === undefined) {
    return undefined;
  }
  let d = new Date(date).toLocaleTimeString();
  return d;
};
