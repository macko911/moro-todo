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

  // filter only active todos
  const activeTodos = todos.filter(checkFilter('Active'))

  // dispatch action for every item
  const markAsComplete = (todo) => dispatch(toggleTodoState(todo.id, true))

  await Promise.all(activeTodos.map(markAsComplete))
}

export const clearCompletedTodos = () => async (dispatch, getState) => {
  const {todos} = getState()

  // filter only completed todos
  const completedTodos = todos.filter(checkFilter('Completed'))

  // dispatch remove action for every item
  const remove = (todo) => dispatch(removeTodo(todo.id))

  await Promise.all(completedTodos.map(remove))
}

export const removeTodo = (todoId) => async (dispatch) => {
  try {
    await db.removeTodo(todoId)
    dispatch({
      type: types.REMOVE_TODO,
      todoId
    })
  } catch (err) {
    console.log(err)
    console.log('Failed to remove todo.')
  }
}

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

export const editTodo = (todoId, text) => async (dispatch) => {
  try {
    await db.editTodo(todoId, text)
    dispatch({
      type: types.EDIT_TODO,
      todoId,
      text
    })
  } catch (err) {
    console.log(err)
    console.log('Failed to edit todo.')
  }
}

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