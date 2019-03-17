import React from 'react'
import {css} from 'emotion'

const Header = () => {
  return (
    <header className={styles}>
      todos
    </header>
  )
}

const styles = css`
  font-size: 5rem;
  color: rgba(175, 47, 47, 0.15);
  font-weight: 300;
  text-align: center;
  padding: 1rem 0;
`

export default Header