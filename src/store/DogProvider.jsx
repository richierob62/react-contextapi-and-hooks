import React from 'react'
import { createContext } from 'react'
import dogReducer from '../reducers/dogReducer'
import Actions from '../actions/dogActions'
import { useReducerWithLogger } from '../utils/logger'

const initialState = dogReducer(undefined, { type: '_INIT_' })
export const DogContext = createContext(initialState)

export default ({ children }) => {
  const [dogState, dispatch] = useReducerWithLogger(dogReducer, initialState)
  const dogActions = Actions(dogState, dispatch)

  return (
    <DogContext.Provider value={[dogState, dogActions]}>
      {children}
    </DogContext.Provider>
  )
}


