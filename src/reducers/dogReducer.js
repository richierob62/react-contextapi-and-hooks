import types from '../actions/action_types'

export const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.PET_DOG:
      return { ...state, status: action.payload }
    case types.FEED_DOG:
      return { ...state, status: action.payload }
    case types.CALL_DOG:
      return { ...state, status: action.payload }
    default:
      return state
  }
}
