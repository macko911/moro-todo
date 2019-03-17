import * as types from './types'

export const setTodos = (todos) => ({
  type: types.SET_TODOS,
  todos
})

export const setFilter = (filter) => ({
  type: types.SET_FILTER,
  filter
})