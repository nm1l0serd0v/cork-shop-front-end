import * as actionTypes from './types'
import axios from '../../lib/axiosInstance.js'

const productsPerPage = 12

export const fetchProductsStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_START
  }
}

export const fetchProductsSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS, 
    data: data
  }
}

export const fetchProductsFail = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAIL,
    error: error
  }
}

export const fetchProducts = (query) => {
  const urlParams = new URLSearchParams(query)
  const page = urlParams.get('page')

  return dispatch => {
    dispatch(fetchProductsStart())
    axios.get(`/products?per_page=${productsPerPage}&page=${page === null ? 1 : page}`)
      .then(response => {
        dispatch(fetchProductsSuccess(response.data))
      }).catch(error => {
        dispatch(fetchProductsFail(error))
      })
  }
}
