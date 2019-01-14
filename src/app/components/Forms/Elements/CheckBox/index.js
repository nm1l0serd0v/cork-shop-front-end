import React from 'react'
import PropTypes from 'prop-types'

const checkBox = (props) => {
  return(
    <React.Fragment>
      <input type="checkbox" name={props.name} />
      <span> { props.text } </span>
    </React.Fragment>
  )
}

checkBox.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default checkBox
