import React from 'react'
import PropTypes from 'prop-types'
import './List.css';

function List({ items, selectedID, onClick }) {
  return (
    <ul className='list'>
      {items.map(o =>
        <li
          className={((selectedID === o.id) ? 'selected' : '') + ' list-item'}
          key={o.id}
          onClick={() => onClick(o.id)}
        >
            {o.name}
        </li>
      )}
    </ul>
  )
}

List.defaultProps = {
  items: [],
}

List.propTypes = {
  items: PropTypes.array,
  selectedID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
}


export default List

