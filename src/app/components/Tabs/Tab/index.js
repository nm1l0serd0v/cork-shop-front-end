import React from 'react'
import PropTypes from 'prop-types'

const tab = (props) => {
  return(
    <li onClick={() => props.clicked(props.index)} className={props.active ? 'active' : ''}>
      <div role="tab" data-toggle="tab">
        {props.name}
      </div>
    </li>
  )
}

tab.propTypes = {
  clicked: PropTypes.func.isRequired,
  name: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired
}
export default tab
