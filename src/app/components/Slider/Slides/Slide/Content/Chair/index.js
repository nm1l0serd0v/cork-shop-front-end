import React from 'react'

import ForwardButton from '../../../../../ForwardButton'

const chair = (props) => (
  <div className="inner">
    <div className="container text-center padding-top-3x">
      <span className="h1 from-bottom">Stylish Chair</span><br/>
      <span className="h2 from-bottom"><span className="text-thin">Special offer: </span> <strong>-25%</strong></span><br/>
      <ForwardButton path="#" classNames={['scale-up']}/>
    </div>
  </div>
)

export default chair
