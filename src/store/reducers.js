import {combineReducers} from 'redux'
import * as types from './types'

import {checkFilter} from '../components/TodoApp/TodoList'

const todos = (state = [], action) => {
  switch (action.type) {
    case types.SET_TODOS:
      return action.todos

    case types.ADD_TODO:
      return [...state, action.todo]

    case types.REMOVE_TODO:
      return state.filter((_, i) => i !== action.index)

    case types.TOGGLE_TODO_STATE:
      return state.map((todo) => {
        if (todo.id !== action.todoId) {
          return todo
        }
        return {...todo, completed: !todo.completed}
      })

    case types.EDIT_TODO:
      return state.map((todo, i) => {
        if (i !== action.index) {
          return todo
        }
        return {...todo, value: action.value}
      })

    case types.COMPLETE_ALL_TODOS:
      return state.map((todo) => ({...todo, completed: true}))

    case types.CLEAR_COMPLETED_TODOS:
      return state.filter(checkFilter('Active'))

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