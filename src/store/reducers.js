import { combineReducers } from 'redux'

import credsReducer from './init'

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    credsReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
