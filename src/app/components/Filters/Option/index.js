import React from 'react'

const option = (props) => {
  const classes = [
    "widget",
    `widget-${props.name}`
  ].join(' ')

  const renderedOptions = props.options.map((option, i) => (<a href="/" key={i}>{option}</a>))

  return(
    <div className={classes}>
      <h3 className="widget-title">{props.title}</h3>
      { props.isList 
      ? <ul>{renderedOptions.map((option, i) => (<li key={i}>{option}</li>))}</ul>
      : renderedOptions
      }
      <ul>
      </ul>
    </div>
  )
}

export default option
