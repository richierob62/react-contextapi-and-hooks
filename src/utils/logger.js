import { useRef, useReducer, useMemo, useEffect } from 'react'

const enchanceDispatchWithLogger = dispatch => action => {
  console.group('Action:', JSON.stringify(action))
  return dispatch(action)
}

export const useReducerWithLogger = (reducer, initialState) => {
  let prevState = useRef(initialState)
  const [state, dispatch] = useReducer(reducer, initialState)

  const dispatchWithLogger = useMemo(() => {
    return enchanceDispatchWithLogger(dispatch)
  }, [dispatch])

  useEffect(() => {
    if (state !== initialState) {
      console.log('Prev state: ', prevState.current)
      console.log('Next state: ', state)
      console.groupEnd()
    }
    prevState.current = state
  }, [state, initialState])

  return [state, dispatchWithLogger]
}


