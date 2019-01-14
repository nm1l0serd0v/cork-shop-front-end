import React from 'react'
import PropTypes from 'prop-types'

import Option from './option'

const select = (props) => {
  return(
    <React.Fragment>
      <label htmlFor={props.name}>{props.label}</label>

      <div className="form-element form-select">
        <select className="form-control" id={props.name}>
          {props.options.map((option, i) => (
            <Option key={i} {...option} />
          ))}
        </select>
      </div>
    </React.Fragment>
  )
}

select.propTypes = {
  label: PropTypes.string.isRequired
}

export default select
