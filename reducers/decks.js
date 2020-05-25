import { GET_DECKS, ADD_DECK } from '../actions/decks';

export default function questions(state = {}, action) {
  switch (action.type) {
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
