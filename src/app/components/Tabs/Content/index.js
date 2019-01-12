import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import './content.scss'

const content = (props) => {
  const classNames = [
    "tab-pane",
    "transition",
    "fade",
    "scale",
    (props.active ? 'active' : '')
  ].join(' ')

  return (
    <CSSTransition in={props.active} timeout={300} classNames="tab-transition">
      <div role="tabpanel" className={classNames} >
        {props.children}
      </div>
    </CSSTransition>
  )
}

content.propTypes = {
  active: PropTypes.bool.isRequired
}

export default content
