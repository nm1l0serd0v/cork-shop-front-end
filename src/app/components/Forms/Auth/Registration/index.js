import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../../UI/Button'
import { Input, Submit } from '../../Elements'

class Registration extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputs: [
        {
          type: "text",
          placeholder: 'E-mail',
          required: true,
          name: 'user[email]',
          label: false
        },
        {
          type: "password",
          placeholder: 'Password',
          required: true,
          name: 'user[password]',
          label: false
        },
        {
          type: "password",
          placeholder: 'Password Confirmation',
          required: true,
          name: 'user[password_confirmation]',
          label: false
        }
      ],
    }
  }

  render() {
    return(
      <div className="inner">
        <form method="post" className="login-form">
          {this.state.inputs.map((input, i) => {
            return( <Input key={i} {...input} />)
          })}

          <div className="form-footer">
            <div className="rememberme">
              <div className="wrapper" onClick={this.props.onLogInClickedHandler}>
                <Button text='I have account'>
                  <i className="material-icons perm_identitymaterial-icons perm_identity"/>
                  I have account
                </Button>
              </div>
            </div>
            <div className="form-submit">
              <Submit text='Sign up'/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

Registration.propTypes = {
  onLogInClickedHandler: PropTypes.func.isRequired
}

export default Registration
