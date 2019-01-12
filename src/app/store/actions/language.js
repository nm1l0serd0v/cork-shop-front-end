import * as actionTypes from './types'

export const setLanguage = (id) => {
  return {
    type: actionTypes.SET_LANGUAGE,
    id: id
  }
}
