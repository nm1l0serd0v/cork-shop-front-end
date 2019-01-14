import * as actionTypes from '../actions/types'

const initialState = {
  default: 0,
  current: 0,
  all: [
    {
      id: 0,
      name: 'EN',
      alt: 'English',
      path: 'images/flags/GB.png'
    },
    {
      id: 1,
      name: 'RU',
      alt: 'Russian',
      path: 'images/flags/DE.png'
    }
  ]
}

const setLanguage = (state, id) => {
  return {
    ...state,
    current: id
  }
}

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LANGUAGE: return setLanguage(state, action.id)
    default: return state
  }
}


export default languageReducer
