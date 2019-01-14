import React from 'react'
import PropTypes from 'prop-types'

const option = (props) => (
  <option value={props.value}> {props.text}</option>
)

option.defaultProps = {
  selected: false
}

option.propTypes = {
  value: PropTypes.any.isRequired,
  text: PropTypes.any.isRequired
}

export default option
