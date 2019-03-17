import React, {useState} from 'react'
import {css} from 'emotion'

const AddTodo = () => {
  const [value, setTodo] = useState('')

  return (
    <div className={styles.wrap}>
      <input
        className={styles.input}
        onChange={e => setTodo(e.currentTarget.value)}

        value={value}
      />
    </div>
  )
}

const styles = {
  wrap: css``,
  input: css`
    border: none;
    padding: 1rem;
    font-size: 1.8rem;
    outline: none;
    color: #545454;
  `
}

export default AddTodo
