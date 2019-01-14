import React from 'react'
import PropTypes from 'prop-types'

const forwardButton = (props) => {
  const classNames = [
    'btn',
    'btn-primary',
    'btn-width-icon-right',
    'waves-effect',
    'waves-light',
  ].concat(props.classNames).join(' ')

  return(
    <a href={props.path} className={classNames}>
      View Offer
      <i className="material-icons arrow_forward"></i>
    </a>
  )
}

forwardButton.propTypes = {
  path: PropTypes.string.isRequired
}

export default forwardButton
