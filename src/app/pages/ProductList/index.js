import React from 'react'

import { withRouter } from 'react-router'
import { inject, observer } from 'mobx-react'

import Filters from '../../components/Filters'
import Pagination from '../../components/Pagination'
import Product from '../../components/Products/Product'
import SearchInput from '../../components/SearchInput'
import Showing from '../../components/Showing'

@inject('productStore')
@observer
class ProductsIndex extends React.Component {
  componentDidMount() {
    this.props.productStore.fetchProducts(this.props.location.search)

    this.unlisten = this.props.history.listen(location  => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.props.productStore.fetchProducts(location.search)
    });
  }

  render() {
    const { productStore } = this.props

    return(
      <section className="container padding-top-3x padding-bottom-3x">
        <h1 className="space-top-half">Products</h1>
        <div className="row padding-top">
          {/* <Filters /> */}
          <div className="col-md-9 col-sm-8">
            <div className="shop-bar">
              <div className="column">
                <Showing
                  from={productStore.showingFromNumber}
                  to={productStore.showingToNumber} 
                />
              </div>
              <div className="column">
                <SearchInput />
              </div>
            </div>

            <div className="row">
              {productStore.products.map((product, i) => {
                return(
                  <div key={i} className="col-md-4 col-sm-6">
                    <Product {...product} loading={productStore.loading} />
                  </div>
                )
              })}
            </div>

            <hr />

            <Pagination
              currentPage={productStore.currentPage}
              totalPages={productStore.totalPages}
              pageClicked={this.onPageLinkClickHandler}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default withRouter(ProductsIndex)
