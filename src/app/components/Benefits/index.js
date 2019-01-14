import React from 'react'

import Benefit from './Benefit'

const benefits = (props) => (
  <section className="container space-top space-bottom padding-top-3x padding-bottom-3x">
    <div className="row">
      {props.benefits.map((benefit, i) => (
        <Benefit key={i} {...benefit} />
      ))}
    </div>
  </section>
)

export default benefits
