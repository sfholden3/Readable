export const getNewId = () => {
  return Math.random()
    .toString(36)
    .substr(-8);
};
