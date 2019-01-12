import React from 'react'
import PropTypes from 'prop-types'

import Brand from './Brand'

const brands = (props) => {
  return(
    <section className="container padding-top-2x padding-bottom">
      <hr/>
      <h3 className="text-center padding-top-2x">More brands</h3>
      <div className="row padding-top">
        {props.brands.map((brand, i) =>(
          <Brand key={i} {...brand} />
        ))}
      </div>
    </section>
  )
}

brands.propTypes = {
  brands: PropTypes.array.isRequired
}

export default brands
