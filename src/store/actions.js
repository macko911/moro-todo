import * as types from './types'

export const setTodos = (todos) => ({
  type: types.SET_TODOS,
  todos
})

export const setFilter = (filter) => ({
  type: types.SET_FILTER,
  filter
})

export const completeAllTodos = () => ({
  type: types.COMPLETE_ALL_TODOS
})

export const clearCompletedTodos = () => ({
  type: types.CLEAR_COMPLETED_TODOS
})

export const removeTodo = (index) => ({
  type: types.REMOVE_TODO,
  index
})

export const toggleTodoState = (index) => ({
  type: types.TOGGLE_TODO_STATE,
  index
})

export const editTodo = (index, value) => ({
  type: types.EDIT_TODO,
  index,
  value
})

export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  todo
})