import React from 'react'

const searchInput = (props) => (
  <form method="get" className="search-box">
    <input type="text" className="form-control" placeholder="Search shop" />
    <button type="submit">
      <i className="material-icons search"></i>
    </button>
  </form>
)

export default searchInput
