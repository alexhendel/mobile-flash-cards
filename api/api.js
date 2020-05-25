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
  return new Promise(function (resolve) {
    resolve(decks);
  });
}

export function getDeck(id) {
  return new Promise(function (resolve) {
    resolve(decks[id]);
  });
}

export function deleteDeck(id) {
  return new Promise(function (resolve) {
    decks[id] = {};
    delete decks[id];
    resolve(decks);
  });
}

export function addDeck(title) {
  const id = generateUID();
  decks[id] = {
    id,
    title,
    questions: [],
  };
  return new Promise(function (resolve) {
    resolve(decks[id]);
  });
}

export function addQuestion(id, { question, answer }) {
  const questionId = generateUID();
  const newQuestion = { id: questionId, question, answer };
  decks[id].questions.push(newQuestion);

  return new Promise(function (resolve) {
    resolve(newQuestion);
  });
}
