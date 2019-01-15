import React from 'react'
import PropTypes from 'prop-types'

import { NavLink, withRouter } from 'react-router-dom'

const pagination = (props) => {
  return (
    <div className="pagination padding-bottom">
      <div className="page-numbers">
        {(Array.from(Array(props.totalPages).keys())).map((page, index) => {
          let pageNumber = page + 1

          return(
            <NavLink  
              key={index}
              isActive={() => (props.currentPage === pageNumber)}
              to={{
                pathname: '/products',
                search: `?page=${pageNumber}`
              }} >
              {pageNumber}
            </NavLink> 
          )
        })}
      </div>

      <div className="pager">
        { props.currentPage === 1 
          ? <span>Prev</span> 
          : <NavLink to={`/products?page=${props.currentPage - 1}`}>Prev</NavLink> 
        }
        <span>|</span>
        { props.currentPage === props.totalPages 
          ? <span>Next</span> 
          : <NavLink to={`/products?page=${props.currentPage + 1}`}>Next</NavLink> 
        }
      </div>
    </div>
  )
}

pagination.defaultProps = {
  totalPages: 1,
  currentPage: 1
}

pagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number
}

export default withRouter(pagination)
