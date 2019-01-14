import React from 'react'
import PropTypes from 'prop-types'

const submit = (props) => {
  return(
    <button type="submit" className={props.className}>
      {props.text}
    </button>
  )
}

submit.defaultProps = {
  className: "btn btn-primary btn-block waves-effect waves-light"
}

submit.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default submit
