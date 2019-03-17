import {combineReducers} from 'redux'
import * as types from './types'

const todos = (state = [], action) => {
  switch (action.type) {
    case types.SET_TODOS:
      return action.todos

    default:
      return state
  }
}

const currentFilter = (state = 'All', action) => {
  switch (action.type) {
    case types.SET_FILTER:
      return action.filter

    default:
      return state
  }
}

export default combineReducers({
  todos,
  currentFilter
})