import React from 'react'
import {css, cx} from 'emotion'

const Spinner = ({className}) => {
  return <div className={cx(className, styles)} />
}

const styles = css`
  border: 2px solid transparent;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Spinner
