import React from 'react'

const loader = (props) => (
  <div className="page-preloader" style={{visibility: 'visible', opacity: 1}}>
    <div className="preloader">
      <img src="/images/preloader.gif" alt="Loading" />
    </div>
  </div>
)

export default loader
