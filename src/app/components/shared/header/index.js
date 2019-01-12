import React from 'react'

import Logo from '../../logo'

import LanguageSwitcher from './languageSwitcher'
import Navigation from './navigation'
import Toolbar from './toolbar'

const header = (props) => {
  return (
    <header className="navbar navbar-sticky">

      <Logo />
      <LanguageSwitcher />
      <Navigation />
      <Toolbar />

    </header>
  )
}

export default header
