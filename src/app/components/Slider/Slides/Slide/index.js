import React from 'react'
import PropTypes from 'prop-types'

const Slide = (props) => {
  const styles = { 
    width: props.width,
    float: 'left',
    'backgroundImage': `url(${props.imagePath})`
  }

  return (
    <div className="slide" style={styles}>
      {props.children}
    </div>
  )
}

Slide.propTypes = {
  imagePath: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
}

export default Slide
