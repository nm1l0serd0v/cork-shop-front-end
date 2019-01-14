import React from 'react';

import LoginForm from '../../components/Forms/Auth/Login'
import RegistrationForm from '../../components/Forms/Auth/Registration'
import Social from '../../components/Forms/Auth/Social'

class Authentication extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      registration: true
    }
  }

  formSwitcherHandler(e) {
    e.preventDefault()

    this.setState({
      registration: !this.state.registration
    })
  }

  render() {
    return ( 
      <React.Fragment>
        <div className="featured-image" style={{ backgroundImage: "url(images/featured-image/faq.jpg)"}}></div>

        <section className="container padding-top-3x padding-bottom-2x">
          <h1 style={{textAlign: "center"}}>User Account</h1>

          <div className="row padding-top">
            {
              this.state.registration 
                ? <div className="col-md-4 col-md-offset-3"> 
                    <h3>Register</h3>
                    <RegistrationForm onLogInClickedHandler={this.formSwitcherHandler.bind(this)}/>
                  </div>
                : <div className="col-md-4 col-md-offset-3 padding-bottom">
                    <h3>Login</h3>
                    <LoginForm onRegisterClickedHandler={this.formSwitcherHandler.bind(this)}/>
                  </div>
            }

            <div className="col-md-3 padding-top-2x">
              <Social />
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Authentication;
