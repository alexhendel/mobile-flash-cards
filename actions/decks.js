import * as API from '../api/api';

export const ADD_DECK = 'ADD_DECK';
export const GET_DECKS = 'GET_DECKS';
export const DELETE_DECK = 'DELETE_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';

function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}

function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks,
  };
}

function deleteDeck(decks) {
  return {
    type: DELETE_DECK,
    decks,
  };
}

function addQuestion(id, question) {
  return {
    type: ADD_QUESTION,
    id,
    question,
  };
}

export function handleAddDeck(title) {
  return (dispatch) => {
    return API.addDeck(title).then((deck) => dispatch(addDeck(deck)));
  };
}

export function handleGetDecks() {
  return (dispatch) => {
    return API.getDecks().then((decks) => {
      dispatch(getDecks(decks));
    });
  };
}

export function handleDeleteDeck(id) {
  return (dispatch) => {
    return API.deleteDeck(id).then((decks) => dispatch(deleteDeck(decks)));
  };
}

export function handleAddQuestion(id, question, answer) {
  return (dispatch) => {
    return API.addQuestion(id, { question, answer }).then((question) =>
      dispatch(addQuestion(id, question))
    );
  };
}
