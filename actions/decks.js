import * as API from '../api/api';

export const ADD_DECK = 'ADD_DECK';
export const GET_DECKS = 'GET_DECKS';

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
