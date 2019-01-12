import React from 'react'

const profileWidget = (props) => {
  return(
    <React.Fragment>
      <a href="/" className="mobile-menu-toggle">
        <i className="material-icons menu"></i>
      </a>

      <a href="account.html">
        <i className="material-icons person"></i>
      </a>
    </React.Fragment>
  )
}

export default profileWidget
