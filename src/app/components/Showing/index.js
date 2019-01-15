import React from 'react'

const showing = (props) => (
  <p className="text-sm space-bottom-none">
    <span className="text-gray">Showing</span> {[props.from, '-', props.to].join('') + ' items'}
  </p>
)

export default showing
