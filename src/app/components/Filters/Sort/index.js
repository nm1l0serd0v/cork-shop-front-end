import React from 'react'

const sort = (props) => {
  return(
    <div className="widget widget-sorting">
      <h3 className="widget-title">Sort By</h3>
      <ul>
        <li>
          <a href="/filter">
            <i className="material-icons sort" /> <span>Default</span>
          </a>
        </li>
        <li>
          <a href="/filter">
            <i className="material-icons favorite_border"/> <span>Popularity</span>
          </a>
        </li>
        <li>
          <a href="/filter">
            <i className="material-icons vertical_align_top"/> <span>Last entries</span>
          </a>
        </li>
        <li>
          <a href="/filter">
            <i className="material-icons star_border"/> <span>Avarage rating</span>
          </a>
        </li>
        <li>
          <a href="/filter">
            <i className="material-icons sort_by_alpha" /> <span>Alphabetically</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default sort
