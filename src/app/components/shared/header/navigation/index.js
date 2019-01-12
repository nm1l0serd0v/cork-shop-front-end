import React from 'react'

import NavigationItem from './navigationItem'

const navigation = (props) => {
  return(
    <nav className="main-navigation text-center">
      <ul className="menu">

        <NavigationItem 
          path={'/'}
          text='home'
        />

        <NavigationItem 
          path={'/products'}
          text='shop'
        />

        <NavigationItem 
          path={'/'}
          text='gallery'
        />

        <NavigationItem 
          path={'/'}
          text='faq'
        />

        <NavigationItem 
          path={'/'}
          text='contacts'
        />
      </ul>
    </nav>
  )
}

export default navigation

// <li className="menu-item-has-children">
//   <a href="#">Shop</a>
//   <ul className="sub-menu">
//     <li><a href="shop-fullwidth-sl.html">Full Width Sidebar Left</a></li>
//     <li><a href="shop-fullwidth-sr.html">Full Width Sidebar Right</a></li>
//     <li><a href="shop-fullwidth-ft.html">Full Width Filters Top</a></li>
//     <li><a href="shop-boxed-sl.html">Boxed Sidebar Left</a></li>
//     <li><a href="shop-boxed-sr.html">Boxed Sidebar Right</a></li>
//     <li><a href="shop-boxed-ft.html">Boxed Filters Top</a></li>
//     <li><a href="shop-single.html">Single Product</a></li>
//     <li><a href="shopping-cart.html">Shopping Cart</a></li>
//     <li><a href="checkout.html">Checkout</a></li>
//     <li><a href="login.html">Login / Register Page</a></li>
//     <li><a href="account.html">User Account Page</a></li>
//   </ul>
// </li>
// <li><a href="blog.html">Blog</a></li>
// <li className="menu-item-has-children">
//   <a href="#">Gallery</a>
//   <ul className="sub-menu">
//     <li><a href="gallery-fullwidth-with-gap.html">Full Width With Gap</a></li>
//     <li><a href="gallery-fullwidth-no-gap.html">Full Width No Gap</a></li>
//     <li><a href="gallery-boxed-with-gap.html">Boxed With Gap</a></li>
//     <li><a href="gallery-boxed-no-gap.html">Boxed No Gap</a></li>
//   </ul>
// </li>
// <li className="menu-item-has-children">
//   <a href="#">Multilevel</a>
//   <ul className="sub-menu">
//     <li className="submenu-item-has-children">
//       <a href="#">Submenu Item 1</a>
//       <ul className="sub-menu">
//         <li><a href="#">Submenu Item 1</a></li>
//         <li><a href="#">Submenu Item 2</a></li>
//         <li><a href="#">Submenu Item 3</a></li>
//       </ul>
//     </li>
//     <li className="submenu-item-has-children">
//       <a href="#">Submenu Item 2</a>
//       <ul className="sub-menu">
//         <li><a href="#">Submenu Item 1</a></li>
//         <li><a href="#">Submenu Item 2</a></li>
//         <li><a href="#">Submenu Item 3</a></li>
//       </ul>
//     </li>
//     <li><a href="#">Submenu Item 3</a></li>
//     <li><a href="#">Submenu Item 4</a></li>
//   </ul>
// </li>
// <li className="menu-item-has-children">
//   <a href="#">Pages</a>
//   <ul className="sub-menu">
//     <li><a href="about.html">About</a></li>
//     <li><a href="contacts.html">Contacts</a></li>
//     <li><a href="faq.html">FAQ</a></li>
//   </ul>
// </li>
// <li className="hidden-md"><a href="elements.html">Elements</a></li>
