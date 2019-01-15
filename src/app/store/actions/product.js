import * as actionTypes from './types'
import axios from '../../axiosInstance.js'

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

export const fetchProducts = (currentPage) => {
  return dispatch => {
    dispatch(fetchProductsStart())
    axios.get(`/products?per_page=12&page=${currentPage === undefined ? 1 : currentPage}`)
      .then(response => {
        dispatch(fetchProductsSuccess(response.data))
      }).catch(error => {
        dispatch(fetchProductsFail(error))
      })
  }
}
