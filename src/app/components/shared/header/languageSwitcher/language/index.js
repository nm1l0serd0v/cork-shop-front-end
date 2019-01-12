import React from 'react'
import PropTypes from 'prop-types'

const language = (props) => {
  return(
    <li onClick={(e) => { props.languageSelected(e, props.id) }}>
      <a href="/">
        <img src={props.path} alt={props.alt} />
        {props.name}
      </a>
    </li>
  )
}

language.propTypes = {
  id:   PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  alt:  PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  languageSelected: PropTypes.func.isRequired,
}

export default language
