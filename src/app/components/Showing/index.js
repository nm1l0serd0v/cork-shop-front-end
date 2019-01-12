import React from 'react'
import PropTypes from 'prop-types'

const showing = (props) => (
  <p className="text-sm space-bottom-none">
    <span className="text-gray">Showing</span> {[props.from, '-', props.to].join('') + ' times'}
  </p>
)

export default showing
