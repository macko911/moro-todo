import React from 'react'
import PropTypes from 'prop-types'
import {css, cx} from 'emotion'

const FILTERS = [ 
  'All',
  'Active',
  'Completed'
]

const TodoFilters = ({setFilter, currentFilter}) => {
  return (
    <div className={styles}>
      {FILTERS.map((filter) => (
        <span
          key={filter}
          className={cx(currentFilter === filter && 'selected')}
          onClick={() => setFilter(filter)}
        >
          {filter}
        </span>
      ))}
    </div>
  )
}

TodoFilters.propTypes = {
  setFilter: PropTypes.func.isRequired
}

const styles = css`
  display: flex;
  span {
    margin-right: .5rem;
    padding: .4rem .8rem;
    cursor: pointer;
    opacity: .8;
    border: 1px solid transparent;
    &.selected,
    &:hover {
      opacity: 1;
      border-radius: 3px;
      border-color: gray;
      color: black;
    }
  }
`

export default TodoFilters