import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import * as actions from '../../store/actions'

import Filters from '../../components/Filters'
import Product from '../../components/Products/Product'
import Pagination from '../../components/Pagination'
import SearchInput from '../../components/SearchInput'
import Showing from '../../components/Showing'

class ProductsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadProducts(this.props.location.search)

    this.unlisten = this.props.history.listen((location, action) => {
      this.props.loadProducts(location.search)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    });
  }

  componentWillUnmount() {
    this.unlisten()
  }

  render() {
    return(
      <section className="container padding-top-3x padding-bottom-3x">
        <h1 className="space-top-half">Products</h1>
        <div className="row padding-top">
          <Filters />
          <div className="col-md-9 col-sm-8">
            <div className="shop-bar">
              <div className="column">
                <Showing
                  from={this.props.showingFromNumber}
                  to={this.props.showingToNumber} 
                />
              </div>
              <div className="column">
                <SearchInput />
              </div>
            </div>

            <div className="row">
              {this.props.products.map((product, i) => (
                <div key={i} className="col-md-4 col-sm-6">
                  <Product {...product} />
                </div>
              ))}
            </div>

            <hr />

            <Pagination
              currentPage={this.props.currentPage}
              totalPages={this.props.totalPages}
              pageClicked={this.onPageLinkClickHandler}
            />
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  loading: state.products.loading,
  currentPage: state.products.currentPage,
  showingFromNumber: state.products.showingFromNumber,
  showingToNumber: state.products.showingToNumber,
  totalPages: state.products.pages
})

const mapDispatchFromProps = dispatch => ({
  loadProducts: (query) => { dispatch(actions.fetchProducts(query)) }
})

export default withRouter(connect(mapStateToProps, mapDispatchFromProps)(ProductsIndex))
