import types from './action_types'

export default (state, dispatch) => ({
  feedCat: data => {
    dispatch({ type: types.FEED_CAT, payload: data })
    const apiCall = Promise.resolve('ok to pet')
    apiCall.then(serverResponse => {
      dispatch({
        type: types.PET_CAT,
        payload: serverResponse
      })
    })
  },
  callCat: data => dispatch({ type: types.CALL_CAT, payload: data }),
  petCat: data => dispatch({ type: types.PET_CAT, payload: data })
})
