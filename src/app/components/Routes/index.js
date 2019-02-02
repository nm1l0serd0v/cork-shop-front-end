import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../../pages/Home';
import ProductList from '../../pages/ProductList';
import SingleProduct from '../../pages/SingleProduct';
import Authentication from '../../pages/Authentication';
import Profile from '../../pages/Profile';

const Routes = (props) => {
  return(
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Authentication} />
      <Route path="/profile" component={Profile} />
      <Route path="/products" exact component={ProductList} />
      <Route path="/products/:id" component={SingleProduct} />
    </React.Fragment>
  )
}

export default Routes
