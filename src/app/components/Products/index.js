import React from 'react'
import PropTypes from 'prop-types'

import Product from './Product'

const eachSlice = (array, sliceInterval, result=[]) => {
  result.push(
    array.splice(0, sliceInterval)
  )

  return array.length === 0 ? result : eachSlice(array, sliceInterval, result)
}

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
