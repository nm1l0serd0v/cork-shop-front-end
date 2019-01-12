import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const dots = (props) => {
  const dotsRange = Array.from(Array(props.slidesLength).keys())
  return(
    <div className="dots-container">
      {dotsRange.map((index) => (
        <div 
          key={index}
          onClick={() => (props.clicked(index))}
          className={["dot", (props.currentIndex === index ? 'active' : '')].join(' ')} 
        />
      ))}
    </div>
  )
}

dots.propTypes = {
  slidesLength: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  clicked: PropTypes.func.isRequired
}

export default dots
