import React from 'react'

import Tabs from '../../components/Tabs'

import UserForm from '../../components/Forms/User'
import Orders from '../../components/Orders'
import WishList from '../../components/WishList'

const profile = (props) => {
  const formHeader = (
    <React.Fragment>
      <i className="material-icons person" />
      <span>Profile</span>
    </React.Fragment>
  )

  const OrdersHeader = (
    <React.Fragment>
      <i className="material-icons shopping_cart" />
      <span>Orders (3)</span>
    </React.Fragment>
  )

  const WishListHeader = (
    <React.Fragment>
      <i className="material-icons favorite" />
      <span>WishList (6)</span>
    </React.Fragment>
  )
  return(
    <React.Fragment>
      <div className="featured-image" style={{backgroundImage: 'url(images/featured-image/account.jpg)'}} />

      <section className="container padding-top-3x">
        <h1 className="mobile-center">Howdy, <span className="text-semibold">John</span></h1>
        <div className="row padding-top">
          <div className="col-sm-9 padding-bottom-2x">
            <Tabs
              headers={[
                { name: formHeader },
                { name: OrdersHeader },
                { name: WishListHeader }
              ]}

              contents={[
                <UserForm />,
                <Orders />,
                <WishList />
              ]}

              centerAligin={false}
            />
          </div>

          <div className="col-sm-3 padding-bottom-2x">
            <aside className="mobile-center">
              <h3>Your reward points:</h3>
              <h3><span className="text-semibold">1356</span> <span className="h5">points</span></h3>
              <p className="text-sm text-gray">You can spend these points on products from our shop catalog, to reduce shipping cost, etc.</p>
              <a href="/" className="btn btn-default btn-ghost icon-left btn-block">
                <i className="material-icons arrow_back"></i>
                Go to Shop
              </a>
              <a href="/" className="btn btn-primary btn-block waves-effect waves-light space-top-none">Get more points</a>
            </aside>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default profile
