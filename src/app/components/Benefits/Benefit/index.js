import React from 'react'

const benefit = (props) => (
  <div className="col-md-3 col-sm-6">
    <div className="feature text-center">
      <div className="feature-icon">
        <i className={["material-icons", props.iconName].join(' ')}></i>
      </div>
      <h4 className="feature-title">{props.title}</h4>
      <p className="feature-text">{props.text}</p>
    </div>
  </div>
)

export default benefit
