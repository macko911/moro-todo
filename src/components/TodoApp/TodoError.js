import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'emotion'

const TodoError = ({error, setError}) => {
  if (!error) {
    return null
  }
  return (
    <div className={styles}>
      <span className="error-msg" role="img" aria-label="warning">
        ⚠️ {error}
      </span>
      <span className="clear-error-btn" onClick={() => setError(null)}>
        x
      </span>
    </div>
  )
}

TodoError.propTypes = {
  error: PropTypes.string
}

const styles = css`
  color: red;
  font-weight: normal;
  padding: 1rem 2rem;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;

  .error-msg {
    margin-right: auto;
    flex: 1;
  }

  .clear-error-btn {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`

export default TodoError
