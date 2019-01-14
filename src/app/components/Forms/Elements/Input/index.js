import React from 'react'
import PropTypes from 'prop-types'

const input = (props) => {
  return(
    <React.Fragment>
      { props.label ? <label htmlFor={props.name}>{props.placeholder}</label> : null }
      <input 
        className={props.className}
        placeholder={props.placeholder}
        type={props.type}
        required={props.required} 
        name={props.name}
        disabled={props.disabled}
        id={props.name}
      />
    </React.Fragment>
  )
}

input.defaultProps = {
  className: 'form-control',
  required: true,
  disabled: false,
  label: true
}

input.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default input
