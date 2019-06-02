import types from '../actions/action_types'

export const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.PET_CAT:
      return { ...state, status: action.payload }
    case types.FEED_CAT:
      return { ...state, status: action.payload }
    case types.CALL_CAT:
      return { ...state, status: action.payload }
    default:
      return state
  }
}
