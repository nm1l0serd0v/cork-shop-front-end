import React from 'react'
import PropTypes from 'prop-types'

import Category from './Category'

const categories = (props) => {
  return(
    <React.Fragment>
      <h3 className="text-center padding-top">Categories</h3>

      <div className="row padding-top padding-bottom-3x">
        {props.categories.map((category, i) => (
          <Category key={i} {...category} />
        ))}
      </div>
    </React.Fragment>
  )
}

categories.propTypes = {
  categories: PropTypes.array.isRequired
}

export default categories
