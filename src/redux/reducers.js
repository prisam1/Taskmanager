import { combineReducers } from 'redux'
import {  TOGGLE_DARK_MODE } from './actionTypes'


  const darkModeReducer = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return !state
    default:
      return state
  }
}


const rootReducer = combineReducers({
  
  darkMode: darkModeReducer
});

export default rootReducer
