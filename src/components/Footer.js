import React from 'react'
import {css} from 'emotion'

const Footer = () => {
  return (
    <footer className={styles}>
      <div>Hint: edit item with double-click</div>
      <div>Created by Matej Vobornik</div>
    </footer>
  )
}

const styles = css`
  font-size: 0.9rem;
  text-align: center;
  color: gray;
  padding: 1rem 0;

  div {
    margin-bottom: 0.5rem;
  }
`

export default Footer
