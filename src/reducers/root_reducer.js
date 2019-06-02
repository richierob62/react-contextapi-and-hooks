import { combineReducers } from 'redux'
import catReducer from './catReducer'
import dogReducer from './dogReducer'

export default combineReducers({
  cat: catReducer,
  dog: dogReducer
})
