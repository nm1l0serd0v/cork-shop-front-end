import React from 'react'

import Cart from '../cart'
import ProfileWidget from '../profileWidget'

const toolbar = (props) => {
  return(
    <div className="toolbar">
      <div className="inner">
        <ProfileWidget />
        <Cart />
      </div>
    </div>
  )
}

export default toolbar
