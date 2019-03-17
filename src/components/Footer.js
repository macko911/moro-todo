import React from 'react'
import {css} from 'emotion'

const Footer = () => {
  return <footer className={styles}>Created by Matej Vobornik</footer>
}

const styles = css`
  font-size: 0.7rem;
  text-align: center;
  color: gray;
  padding: 1rem 0;
`

export default Footer
