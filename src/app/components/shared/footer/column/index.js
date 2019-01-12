import React from 'react'

const column = (props) => {
  return(
    <div className="column">
      <h3 className="widget-title">
        {props.leadTitle}
        <small>{props.smallTitle}</small>
      </h3>
      {props.children}
    </div>
  )
};

export default column
