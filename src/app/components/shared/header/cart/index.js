import React from 'react'

const cart = (props) => {
  return(
    <div className="cart-btn">
      <a href="shopping-cart.html">
        <i>
          <span className="material-icons shopping_basket"></span>
          <span className="count">2</span>
        </i>
      </a>
      <div className="cart-dropdown">
        <div className="cart-item">
          <a href="/" className="item-thumb">
            <img src="/images/cart/item01.jpg" alt="Item" />
          </a>
          <div className="item-details">
            <h3 className="item-title"><a href="shop-single.html">Concrete Lamp</a></h3>
            <h4 className="item-price">1 x $85.90</h4>
          </div>
          <a href="/" className="close-btn">
            <i className="material-icons close"></i>
          </a>
        </div>
        <div className="cart-item">
          <a href="shop-single.html" className="item-thumb">
            <img src="/images/cart/item02.jpg" alt="Item" />
          </a>
          <div className="item-details">
            <h3 className="item-title"><a href="shop-single.html">Storage Box</a></h3>
            <h4 className="item-price">2 x $38.00</h4>
          </div>
          <a href="/" className="close-btn">
            <i className="material-icons close"></i>
          </a>
        </div>
        <div className="cart-subtotal">
          <div className="column">
            <span>Subtotal:</span>
          </div>
          <div className="column">
            <span className="amount">$161.90</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default cart
