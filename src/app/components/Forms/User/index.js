import React from 'react'

import { Submit, CheckBox, FieldGroups } from '../Elements'

class User extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      personalInformation: [
        [
          {
            type: "text",
            placeholder: 'First Name',
            required: true,
            name: 'user[first_name]',
          },
          {
            type: "text",
            placeholder: 'Last Name',
            required: true,
            name: 'user[last_name]'
          },
          {
            type: "text",
            placeholder: 'Email Address',
            required: true,
            name: 'user[email]',
            disabled: true
          },
          {
            type: "text",
            placeholder: 'Phone Number',
            required: true,
            name: 'user[phone_number]',
          },
          {
            type: "password",
            placeholder: 'Password',
            required: true,
            name: 'user[password]'
          },
          {
            type: "password",
            placeholder: 'Confirm password',
            required: true,
            name: 'user[password_confirmation]'
          }
        ],
        [
          {
            type: 'text',
            placeholder: 'Delivery Address',
            name: 'user[address]'
          }
        ]
      ],

      locationInformation: [
        [
          {
            label: 'Country',
            name: 'user[country]',
            type: 'select',
            options: [
              {
                value: "",
                text: "Country"
              },
              {
                value: "australia",
                text: "Australia"
              },
              {
                value: "gb",
                text: "Great Britain"
              },
              {
                value: "poland",
                text: "Poland"
              },
              {
                value: "switzerland",
                text: "Switzerland"
              },
              {
                value: "usa",
                text: "USA"
              },
            ]
          },
          {
            label: 'State',
            name: 'user[state]',
            type: 'select',
            options: [
              {
                value: "",
                text: "State"
              },
              {
                value: 1,
                text: "New York"
              },
              {
                value: 2,
                text: "1"
              },
              {
                value: 3,
                text: "3"
              },
            ]
          },
          {
            label: 'City',
            name: 'user[city]',
            type: 'select',
            options: [
              {
                value: "",
                text: "City"
              },
              {
                value: 1,
                text: "Bern"
              },
              {
                value: 2,
                text: "London"
              },
              {
                value: 3,
                text: "New York"
              },
              {
                value: 4,
                text: "Warsaw"
              },
            ]
          },
          {
            type: "text",
            placeholder: 'ZIP code',
            required: true,
            name: 'user[zip_code]',
          }
        ]
      ]
    }
  }

  render() {
    return(
      <form method="post">

        <FieldGroups fields={this.state.personalInformation} />

        {/* <FieldGroups fields={this.state.locationInformation} /> */}

        <div className="row">
          <div className="col-sm-6">
            <label className="checkbox space-top">
              <CheckBox text="Subscribe me to newsletter" name="user[news_subscription]" />
            </label>
          </div>

          <div className="col-sm-6 text-right mobile-center">
            <Submit text="Update Profile" className="btn btn-primary waves-effect waves-light"/>
          </div>
        </div>
      </form>
    )
  }
}

export default User
