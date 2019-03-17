import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'emotion'

const AddTodo = ({setTodo, value, addTodo}) => {
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <div className={styles.wrap}>
      <input
        className={styles.input}
        onChange={e => setTodo(e.currentTarget.value)}
        onKeyDown={onKeyDown}
        value={value}
        placeholder='What needs to be done?'
      />
    </div>
  )
}

AddTodo.propTypes = {
  setTodo: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  addTodo: PropTypes.func.isRequired
}

const styles = {
  wrap: css``,
  input: css`
    border: none;
    padding: 1rem;
    font-size: 1.8rem;
    outline: none;
    color: #545454;
    font-weight: 100;
    min-width: 320px;
    width: 100%;
  `
}

export default AddTodo
