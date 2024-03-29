import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {css} from 'emotion'
// import {useAsync} from '../../hooks'

const AddTodo = ({addTodo, completeAllTodos}) => {
  const [value, setTodo] = useState('')

  const onKeyDown = async (e) => {
    if (e.key === 'Enter') {
      const success = await addTodo(value)
      if (success) {
        setTodo('')
      }
    }
  }

  return (
    <div className={styles.wrap}>
      <span className={styles.toggleAll} onClick={() => completeAllTodos()}>
        ❯
      </span>
      <input
        className={styles.input}
        onChange={(e) => setTodo(e.currentTarget.value)}
        onKeyDown={onKeyDown}
        value={value}
        placeholder="What needs to be done?"
      />
    </div>
  )
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  completeAllTodos: PropTypes.func.isRequired
}

const styles = {
  wrap: css`
    display: flex;
    background: white;
    align-items: center;
    padding: 1rem;
  `,
  input: css`
    border: none;
    padding: 0 1rem;
    font-size: 1.8rem;
    outline: none;
    color: #545454;
    font-weight: 100;
    min-width: 320px;
    width: 100%;
  `,
  toggleAll: css`
    font-size: 1.5rem;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    text-align: center;
    transform: rotate(90deg);
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  `
}

export default AddTodo
