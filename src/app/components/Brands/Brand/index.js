import React from 'react'
import PropTypes from 'prop-types'

const brand = (props) => {
  return(
    <div className="col-sm-4 col-xs-6">
      <a href="#" className="brand">
        <div className="brand-logo opacity-75">
          <img src={props.imagePath} alt="Brand" />
        </div>
        <p className="brand-text">{props.description}</p>
      </a>
    </div>
  )
}

brand.propTypes = {
  imagePath: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default brand
