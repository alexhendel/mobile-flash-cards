const decks = {
  '23425345563456456d': {
    id: '23425345563456456d',
    title: 'Fancy Deck',
    questions: [],
  },
  '4adfg23lk43q234344': {
    id: '4adfg23lk43q234344',
    title: 'Other Deck',
    questions: [],
  },
};

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function getDecks() {
  const deckArray = [];
  Object.keys(decks).forEach((key) => {
    deckArray.push(decks[key]);
  });
  return deckArray;
}

export function getDeck(id) {
  return decks[id];
}

export function addDeck(title) {
  const id = generateUID();
  return (decks[id] = {
    id,
    title,
    questions: [],
  });
}

export function addQuestion(id, { question, answer }) {
  const questionId = generateUID();
  const newQuestion = { id: questionId, question, answer };
  decks[id].questions.push(newQuestion);
  return newQuestion;
}
