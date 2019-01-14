import React from 'react'

import ForwardButton from '../../../../../UI/ForwardButton'

const spa = (props) => (
  <div className="container">
    <div className="absolute from-top" style={{top: '13%'}}>
      <span className="h1 hidden-xs">New SPA<br/>Cosmetics</span>
    </div>
    <div className="absolute text-right from-bottom" style={{bottom: '13%', right: '15px'}}>
      <span className="h2">
        <span className="text-thin">Only</span>
        <br/>
        <strong>$127.99</strong>
      </span>
      <br/>

      <ForwardButton path="#" classNames={['space-top-none']}/>
    </div>
  </div>
)

export default spa
