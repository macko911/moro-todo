import * as types from './types'
import db from '../database'
import {checkFilter} from '../components/TodoApp/TodoList'

export const setTodos = (todos) => ({
  type: types.SET_TODOS,
  todos
})

export const setFilter = (filter) => ({
  type: types.SET_FILTER,
  filter
})

export const completeAllTodos = () => async (dispatch, getState) => {
  const {todos} = getState()

  // filter only todo ids of active items
  const activeTodoIds = todos.filter(checkFilter('Active'))

  // dispatch action for every item
  const markAsComplete = (todo) => dispatch(toggleTodoState(todo.id, true))

  await Promise.all(activeTodoIds.map(markAsComplete))
}

export const clearCompletedTodos = () => ({
  type: types.CLEAR_COMPLETED_TODOS
})

export const removeTodo = (index) => ({
  type: types.REMOVE_TODO,
  index
})

export const toggleTodoState = (todoId, completed) => async (dispatch) => {
  try {
    if (completed) {
      await db.completeTodo(todoId)
    } else {
      await db.incompleteTodo(todoId)
    }
    dispatch({
      type: types.TOGGLE_TODO_STATE,
      todoId
    })
  } catch (err) {
    console.log(err)
    console.log('Failed to toggle todo item state.')
  }
}

export const editTodo = (index, value) => ({
  type: types.EDIT_TODO,
  index,
  value
})

export const addTodo = (text) => async (dispatch, getState) => {
  const {todos} = getState()

  // don't add empty todo
  if (text === '') {
    return false
  }
  // if todo already added, skip it
  if (todos.map(todo => todo.text).includes(text)) {
    return false
  }
  try {
    // create new todo on backend
    const res = await db.createTodo(text)
    const newTodo = res.data

    // add todo and reset input box
    dispatch({
      type: types.ADD_TODO,
      todo: newTodo
    })
    return true
  } catch (err) {
    console.log(err)
    console.log('Failed to add new todo.')
    return false
  }
}

export const fetchTodos = () => async (dispatch) => {
  try {
    const res = await db.fetchTodos()
    const todos = res.data
    dispatch(setTodos(todos))
  } catch (err) {
    console.log(err)
    console.log('Failed to fetch todos.')
  }
}