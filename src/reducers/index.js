import { ADD_CARD_TO_DECK, ADD_DECK, RECEIVE_DECKS } from '../actions'

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK:
      return {
        ...state,
        ...action.deck,
      }
    case ADD_CARD_TO_DECK:
      const { deck, question } = action

      return {
        ...state,
        [deck]: {
          ...state[deck],
          questions: state[deck].questions.concat(question),
        },
      }
    default:
      return state
  }
}

export default decks
