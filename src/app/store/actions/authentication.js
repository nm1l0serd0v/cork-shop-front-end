import * as actionTypes from './types'

import axios from '../../axiosInstance'

export const loginInit = () => {
  return {
    type: actionTypes.LOGIN_USER_INIT
  }
}

export const loginSuccess = (userData) => {
  return {
    type: actionTypes.LOGIN_USER_SUCCESS,
    userData: userData
  };
};

export const loginFailed = (error) => {
  return {
    type: actionTypes.LOGIN_USER_FAIL,
    error: error
  };
};

export const loginStart = () => {
  return {
    type: actionTypes.LOGIN_USER_START
  }
};

export const purchaseBurger = (orderData) => {
  return dispatch => {
    purchaseBurgerStart();

    axios.post('/orders', orderData)
      .then(response => {
        dispatch(clearBuilder())
        dispatch(purchaseBurgerSuccess(orderData))
      }).catch(error => {
        dispatch(purchaseBurgerFail(error))
      })
  };
};

// export const fetchOrdersSuccess = (orders) => {
//   return {
//     type: actionTypes.FETCH_ORDERS_SUCCESS,
//     orders: orders
//   }
// }

// export const fetchOrdersFail = (error) => {
//   return {
//     type: actionTypes.FETCH_ORDERS_FAIL,
//     error: error
//   }
// }

// export const fetchOrdersStart = () => {
//   return {
//     type: actionTypes.FETCH_ORDERS_START
//   }
// }

// export const fetchOrders = () => {
//   return dispatch => {
//     dispatch(fetchOrdersStart())

//     axios.get('/orders').then((response) => {
//       dispatch(fetchOrdersSuccess(response.data))
//     }).catch(error => {
//       console.log(error)
//       dispatch(fetchOrdersFail(error))
//     })
//   }
// }


