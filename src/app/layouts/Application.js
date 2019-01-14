import React from 'react'

import Header from '../components/Shared/header'
import Footer from '../components/Shared/footer'

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
