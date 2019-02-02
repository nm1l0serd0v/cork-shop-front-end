import React from 'react'

import Column from './column'

const footer = (props) => {
  return(
    <footer className="footer">

      <div className="column">
        <p className="text-sm">Need support? Call <span className="text-primary">001 (917) 555-4836</span></p>
        <div className="social-bar text-center space-bottom">
          <a href="/" className="sb-skype" data-toggle="tooltip" data-placement="top" title="Skype">
            <i className="socicon-skype"></i>
          </a>
          <a href="/" className="sb-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
            <i className="socicon-facebook"></i>
          </a>
          <a href="/" className="sb-google-plus" data-toggle="tooltip" data-placement="top" title="" data-original-title="Google+">
            <i className="socicon-googleplus"></i>
          </a>
          <a href="/" className="sb-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
            <i className="socicon-twitter"></i>
          </a>
          <a href="/" className="sb-instagram" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram">
            <i className="socicon-instagram"></i>
          </a>
        </div>
        <p className="copyright">&copy; 2016. Made with <i className="text-danger material-icons favorite"></i> by rokaux.</p>
      </div>

      <Column leadTitle="Subscription" smallTitle="To receive latest offers and discounts from the shop.">
        <form action="#" method="post" target="_blank" className="subscribe-form">
          <input type="email" className="form-control" name="EMAIL" placeholder="Your e-mail"/>
          <button type="submit"><i className="material-icons send"></i></button>
        </form>
      </Column>

      <Column leadTitle="Payment Methods" smallTitle="We support one of the following payment methods.">
        <div className="cards">
          <img src="/images/cards.png" alt="Cards"/>
        </div>
        <div className="scroll-to-top-btn"><i className="material-icons trending_flat"></i></div>
      </Column>

    </footer>
  )
};

export default footer
