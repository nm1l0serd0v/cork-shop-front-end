import React from 'react'
import PropTypes from 'prop-types'

import Product from './Product'

import eachSlice from '../../lib/eachSlice.js'

const products = (props) => {
  const slisedProducts = eachSlice([...props.collection], 4)

  return (
    <React.Fragment>
      {slisedProducts.map((batch, i) => (
        <div key={i} className="row space-top-half">
          {batch.map((product, i) => (
            <div className="col-lg-3 col-sm-6">
              <Product key={i} {...product} />
            </div>
          )) }
        </div>
      ))}
    </React.Fragment>
  )
}

products.propTypes = {
  collection: PropTypes.array.isRequired
}

export default products
