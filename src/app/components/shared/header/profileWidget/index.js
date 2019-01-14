import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const profileWidget = (props) => {
  return(
    <React.Fragment>
      <NavLink to={props.isLoggedIn ? '/profile' : '/login' }>
        <i className="material-icons person"></i>
      </NavLink>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.authentication.isLoggedIn
})

export default connect(mapStateToProps)(profileWidget)
