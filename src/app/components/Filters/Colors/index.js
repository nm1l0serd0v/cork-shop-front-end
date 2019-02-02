import React from 'react'

const colors = (props) => {
  return(
    <div className="widget widget-colors">
      <h3 className="widget-title">Sort By</h3>
      <ul>
        <li>
          <span className="color" style={{'backgroundColor': '#93c4ef'}}></span> <span>Blue</span>
        </li>
        <li>
          <span className="color" style={{'backgroundColor': '#a7c04d'}}></span> <span>Green</span>
        </li>
        <li>
          <span className="color" style={{'backgroundColor': '#ef0568'}}></span> <span>Red</span>
        </li>
        <li>
          <span className="color" style={{'backgroundColor': '#ffce2b'}}></span> <span>Yellow</span>
        </li>
      </ul>
    </div>
  )

}

export default colors
