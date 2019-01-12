import React from 'react'

import ForwardButton from '../../../../../ForwardButton'

const glasses = (props) => (
  <div className="container padding-top-3x">
    <span className="h1 space-top from-left">Dior Sunglasses</span><br/>
    <span className="h2 from-right"><span className="text-thin">Only <span className="hidden-xs">today</span></span> <strong>-30%</strong></span><br/>

    <ForwardButton path="#" classNames={['scale-up']}/>
  </div>
)

export default glasses
