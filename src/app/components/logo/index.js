import React from 'react'

const logo = (props) => {
  return(
    <React.Fragment>
      <a href="index.html" className="site-logo visible-desktop">
        <span>[&nbsp;</span> CORK
        <span className="text-gray">/</span>
        STORE <span>&nbsp;]</span>
        
      </a>
      <a href="index.html" className="site-logo visible-mobile">
        <span>[</span> M <span>]</span>
      </a>
    </React.Fragment>
  )
}

export default logo
