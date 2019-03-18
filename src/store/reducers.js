import {combineReducers} from 'redux'
import * as types from './types'

const todos = (state = [], action) => {
  switch (action.type) {
    case types.SET_TODOS:
      return action.todos

    case types.ADD_TODO:
      return [...state, action.todo]

    case types.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.todoId)

    case types.TOGGLE_TODO_STATE:
      return state.map((todo) => {
        if (todo.id !== action.todoId) {
          return todo
        }
        return {...todo, completed: !todo.completed}
      })

    case types.EDIT_TODO:
      return state.map((todo, i) => {
        if (todo.id !== action.todoId) {
          return todo
        }
        return {...todo, text: action.text}
      })

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