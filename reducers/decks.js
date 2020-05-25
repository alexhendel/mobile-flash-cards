import { GET_DECKS, ADD_DECK, DELETE_DECK } from '../actions/decks';

export default function questions(state = {}, action) {
  switch (action.type) {
    case DELETE_DECK:
      return { ...action.decks };
    case GET_DECKS:
      return action.decks;
    case ADD_DECK:
      return {
        ...state,
        [action.deck.id]: { ...action.deck },
      };
    default:
      return state;
  }
}
