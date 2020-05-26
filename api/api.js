import { AsyncStorage } from 'react-native';

let decks = {};
const DATA_KEY = 'MobileFlashCards:Decks';
/** TEST DATA 
const decks = {
  '23425345563456456d': {
    id: '23425345563456456d',
    title: 'Fancy Deck',
    questions: [
      { id: '23453645264566663', question: 'Test1', answer: 'Q1' },
      { id: '234asdfdfg4566663', question: 'B', answer: 'Q22' },
    ],
  },
  '4adfg23lk43q234344': {
    id: '4adfg23lk43q234344',
    title: 'Other Deck',
    questions: [],
  },
};
*/

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export async function getDecks() {
  const resultStr = await AsyncStorage.getItem(DATA_KEY);
  const data = JSON.parse(resultStr);
  if (data) {
    decks = data;
  }

  return new Promise(function (resolve) {
    resolve(decks);
  });
}

export async function deleteDeck(id) {
  decks[id] = {};
  delete decks[id];

  await AsyncStorage.setItem(DATA_KEY, JSON.stringify(decks));

  return new Promise(function (resolve) {
    resolve(decks);
  });
}

export async function addDeck(title) {
  const id = generateUID();
  decks[id] = {
    id,
    title,
    questions: [],
  };

  await AsyncStorage.setItem(DATA_KEY, JSON.stringify(decks));

  return new Promise(function (resolve) {
    resolve(decks[id]);
  });
}

export async function addQuestion(id, { question, answer }) {
  const questionId = generateUID();
  const newQuestion = { id: questionId, question, answer };
  decks[id].questions.push(newQuestion);

  await AsyncStorage.setItem(DATA_KEY, JSON.stringify(decks));

  return new Promise(function (resolve) {
    resolve(newQuestion);
  });
}
