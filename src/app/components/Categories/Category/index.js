import React from 'react'
import PropTypes from 'prop-types'

const Category = (props) => {
  return(
    <div className="col-sm-3 col-xs-6">
      <a href="#" className="category-link">
        <img src={props.imagePath} alt="Category" />
        {props.name}
      </a>
    </div>
  )
}

Category.propTypes ={
  name: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired
}

export default Category
