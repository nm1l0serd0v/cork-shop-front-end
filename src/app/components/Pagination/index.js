import React from 'react'
import PropTypes from 'prop-types'

const pagination = (props) => {
  return (
    <div className="pagination padding-bottom">
      <div className="page-numbers">
        {(Array.from(Array(props.totalPages).keys())).map((page, index) => (
          page + 1 == props.currentPage 
          ? <span key={index} className="active">{page + 1}</span>
          : <a key={index} href="/">{page + 1}</a> 
        ))}
      </div>
      <div className="pager">
        { props.currentPage !== 1 ? <a href="#">Prev</a> : <span>Prev</span> }
        <span>|</span>
        <a href="#">Next</a>
      </div>
    </div>
  )
}

pagination.defaultProps = {
  totalPages: 1,
  currentPage: 1
}

pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
}

export default pagination
