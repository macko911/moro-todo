import React from 'react'
import {css} from 'emotion'

const TodoItem = ({value}) => {
  return (
    <div className={styles}>
      {value}
    </div>

  )
}

const styles = css`
  background: white;
  padding: 1rem;
  font-size: 1.5rem;
`

export default TodoItem