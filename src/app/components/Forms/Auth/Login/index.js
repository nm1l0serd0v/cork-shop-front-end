import React from 'react'

import Button from '../../../UI/Button'
import { Input, CheckBox, Submit } from '../../Elements'

class Login extends React.Component {
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
        }
      ],
    }
  }

  render() {
    return(
      <form method="post" className="login-form">
        {this.state.inputs.map((input, i) => {
          return( <Input key={i} {...input} />)
        })}
        <div className="form-group">
          <label className="checkbox">
            <CheckBox text="Remember me" name="user[remember]" />
          </label>
        </div>

        <div className="form-footer">
          <div className="rememberme">
            <div className="wrapper" onClick={this.props.onRegisterClickedHandler}>
              <Button text='I have account'>
                <i className="material-icons perm_identitymaterial-icons perm_identity"/>
                Register account
              </Button>
            </div>
          </div>

          <div className="form-submit">
            <Submit text="Login"/>
          </div>
        </div>

        <div className="form-group">
          <a href="/">Forgot my password.</a>
        </div>
      </form>
    )
  }
}

export default Login
