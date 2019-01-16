import React from 'react'
import PropTypes from 'prop-types'

const button = (props) => {
  return(
    <div className={props.className}>
      {props.children}
    </div>
  )
}

button.defaultProps = {
  className: "btn btn-ghost btn-default btn-icon-left waves-effect waves-light"
}

button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default button
