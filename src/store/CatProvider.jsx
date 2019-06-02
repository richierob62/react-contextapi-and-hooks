import React from 'react'
import { createContext } from 'react'
import catReducer from '../reducers/catReducer'
import Actions from '../actions/catActions'
import { useReducerWithLogger } from '../utils/logger'

const initialState = catReducer(undefined, { type: '_INIT_' })
export const CatContext = createContext(initialState)

export default ({ children }) => {
  const [catState, dispatch] = useReducerWithLogger(catReducer, initialState)
  const catActions = Actions(catState, dispatch)

  return (
    <CatContext.Provider value={[catState, catActions]}>
      {children}
    </CatContext.Provider>
  )
}
