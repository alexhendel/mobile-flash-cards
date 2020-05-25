export const toArray = (decks) => {
  const arr = [];
  Object.keys(decks).forEach((key) => {
    arr.push(decks[key]);
  });
  return arr;
};
