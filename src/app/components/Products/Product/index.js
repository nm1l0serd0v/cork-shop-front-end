import React from 'react'
import { NavLink } from 'react-router-dom'

import currencyFormatter from 'currency-formatter'
import { productPath } from '../../../lib/routes'

import Loader from './Loader'
import Rating from './Rating'
import Labels from './Labels'

const formatPrice = (price) => { return currencyFormatter.format(price, { code: 'USD' }) }

const product = (props) => {
	if (props.loading === true) { return <Loader /> }

  const rating = <Rating rating={props.rating}/>;
  const labels = <Labels labels={props.labels}/>;
  const discountLabel = <span className="shop-label text-danger">Sale</span>;

  const formatedPrice = formatPrice(props.price)

  const price = <span className="shop-item-price">{formatedPrice}</span>

  const priceWithDiscount = (
    <span className="shop-item-price">
      <span className="old-price">{formatedPrice}</span>
      <span>{formatPrice(props.discountPrice)}</span>
    </span>
  )

  let imageLink = props.master.images[0].large_url

  return(
    <div className="shop-item">
      <div className="shop-thumbnail">
        { props.discount ? discountLabel : null }
        { props.rating !== undefined ? rating : null }
        { props.labels.length !== 0 ? labels : null }

        <NavLink to={productPath(props.id)} className="item-link" />

        <img src={imageLink} style={{backgroundColor: '#ecebeb', minHeight: '262px'}} alt="Shop item" width="100%" height="100%" />

        <div className="shop-item-tools">
          <a href="/" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
            <i className="material-icons favorite_border"></i>
          </a>

          <a href="/" className="add-to-cart">
            <em>Add to Cart</em>
            <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
              <path strokeDasharray="19.79 19.79" strokeDashoffset="19.79" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="shop-item-details">
        <h3 className="shop-item-title" style={{width: '100%'}}>
          <NavLink to={productPath(props.id)}>
            {props.name}
          </NavLink>
        </h3>

        {price.discount ? priceWithDiscount : price}
      </div>
    </div>
  )
}

product.defaultProps = {
  discount: false,
  labels: []
}

export default product
