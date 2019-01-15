import * as actionTypes from '../actions/types'

const initialState = {
  products: [],
  loading: false
}

const currentPageRangeFrom = (currentPage, perPage) => {
  return currentPage * perPage - perPage + 1
}

const currentPageRangeTo = (currentPage, perPage) => {
  return currentPage * perPage
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true
      }

    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.data.products,
        currentPage: action.data.current_page,
        showingFromNumber: currentPageRangeFrom(
          action.data.current_page,
          action.data.per_page
        ),
        showingToNumber: currentPageRangeTo(
          action.data.current_page,
          action.data.per_page
        ),
        pages: action.data.pages
      }

    case actionTypes.FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    default: return state
  }
}

export default productsReducer
