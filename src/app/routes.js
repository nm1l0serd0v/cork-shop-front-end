import React from 'react'
import { Route } from 'react-router-dom'

import Home from './pages/Home';
import ProductsIndex from './pages/ProductsIndex';
import Authentication from './pages/Authentication';
import Profile from './pages/Profile';

const Routes = (props) => {
  return(
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/products" component={ProductsIndex} />
      <Route path="/login" component={Authentication} />
      <Route path="/profile" component={Profile} />
    </React.Fragment>
  )
}

export default Routes
