import React from 'react'
import PropTypes from 'prop-types'

const pagination = (props) => (
  <div className="pagination padding-bottom">
    <div className="page-numbers">
      <a href="#">1</a>
      <a href="#">2</a>
      <span className="active">3</span>
      <a href="#">4</a>
      <span>...</span>
      <a href="#">10</a>
    </div>
    <div className="pager">
      <a href="#">Prev</a>
      <span>|</span>
      <a href="#">Next</a>
    </div>
  </div>
)

export default pagination
