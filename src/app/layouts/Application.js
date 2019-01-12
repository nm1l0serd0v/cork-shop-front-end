import React from 'react'

import Header from '../components/shared/header'
import Footer from '../components/shared/footer'

import Home from '../pages/Home'

export default class Application extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className="page-preloader">
          <div className="preloader">
            <img src="images/preloader.gif" alt="Preloader" />
          </div>
        </div>

        <div className="page-wrapper">
          <Header />
            {this.props.children}
          <Footer />
        </div>

      </React.Fragment>
    )
  }
}
