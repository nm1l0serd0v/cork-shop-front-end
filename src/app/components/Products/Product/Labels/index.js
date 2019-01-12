import React from 'react'
import PropTypes from 'prop-types'

const labels = (props) => (
  <React.Fragment>
    {
      props.labels.map((label, i) => (
        <span key={i} className="shop-label text-warning">
          {label} 
        </span>
      ))
    }
  </React.Fragment>
)

labels.propTypes = {
  labels: PropTypes.array.isRequired
}
export default labels
