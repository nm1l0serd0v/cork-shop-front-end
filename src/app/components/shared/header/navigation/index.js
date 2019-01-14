import React from 'react'

import NavigationItem from './navigationItem'

const navigation = (props) => {
  return(
    <nav className="main-navigation text-center">
      <ul className="menu">

        <NavigationItem 
          path={'/'}
          text='home'
        />

        <NavigationItem 
          path={'/products'}
          text='shop'
        />

        <NavigationItem 
          path={'/profile'}
          text='profile'
        />
      </ul>
    </nav>
  )
}

export default navigation
