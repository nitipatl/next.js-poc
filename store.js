import { createStore, applyMiddleware } from 'redux'
import { fromJS, Map } from 'immutable'
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from './app/reducers'

const defaultState = fromJS({
  domain: {}
})  

export default (initialState = defaultState) => {
  if (!Map.isMap(initialState))
    initialState = fromJS(initialState)

  return createStore(rootReducer, initialState, devToolsEnhancer())
}