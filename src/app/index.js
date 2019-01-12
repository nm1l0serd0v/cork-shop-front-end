import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import languageReducer from './store/reducers/language'
import * as serviceWorker from './serviceWorker';

import Layout from './layouts/Application';
import Home from './pages/Home';
import ProductsIndex from './pages/ProductsIndex'


import './styles/application.scss'

const store = createStore(languageReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={ProductsIndex} />
      </Layout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
