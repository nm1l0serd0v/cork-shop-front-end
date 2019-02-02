import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'mobx-react'
import MobxDevtools from 'mobx-react-devtools'
import ProductStore from './stores/products'

import Layout from './layouts/Application';
import Routes from './components/Routes'

import './styles/application.scss'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider productStore={ProductStore}>
    <Router>
      <Layout>
        <Routes />
        <MobxDevtools />
      </Layout>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
