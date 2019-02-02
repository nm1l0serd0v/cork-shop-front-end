import { observable, action, computed } from 'mobx'
import axios from '../lib/axiosInstance'

import {
  currentPageRangeFrom,
  currentPageRangeTo
} from '../lib/helpers/pagination'

const productsPerPage = 12

class ProductsApi {
  fetchProducts = (query) => {
    const urlParams = new URLSearchParams(query);
    const page = urlParams.get('page');

    return axios.get(`/products?per_page=${productsPerPage}&page=${page === null ? 1 : page}`)
  }
}

class Products {
  @observable products = Array.from(Array(productsPerPage).keys());
  @observable propsLoaded = false;
  @observable loading = true;
  @observable error = null;
  @observable pages;
  @observable currentPage = 1;
  @observable perPage = productsPerPage;
  @observable totalPages;

  @computed get showingFromNumber() {
    return currentPageRangeFrom(this.currentPage, this.perPage);
  }

  @computed get showingToNumber() {
    return currentPageRangeTo(this.currentPage, this.perPage);
  }

  constructor(productsApi) {
    this.productsApi = productsApi
  }

  @action("Fetch products")
  fetchProducts(query) {
    this.setLoading()

    this.productsApi.fetchProducts(query)
      .then(response => {
        const { data } = response;

        this.products = data.products;
        this.loading = false;
        this.propsLoaded = true;
        this.currentPage = data.current_page;
        this.pages = data.pages;
        this.perPage = data.per_page
        this.totalPages = data.pages
      }).catch(error => {
        this.loading = false;
        this.propsLoaded = false;
        this.error = error;
      })
  }

  @action("Set loading state")
  setLoading() {
    this.loading = true
    this.propsLoaded = false
    this.products = Array.from(Array(productsPerPage).keys());
  }
}

const products = new Products(new ProductsApi)

export default products
