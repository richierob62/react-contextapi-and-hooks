import types from './action_types'

export default (state, dispatch) => ({
  feedDog: data => {
    dispatch({ type: types.FEED_DOG, payload: data })
    const apiCall = Promise.resolve('dog wants to walk')
    apiCall.then(serverResponse => {
      dispatch({
        type: types.PET_DOG,
        payload: serverResponse
      })
    })
  },
  callDog: data => dispatch({ type: types.CALL_DOG, payload: data }),
  petDog: data => dispatch({ type: types.PET_DOG, payload: data })
})
