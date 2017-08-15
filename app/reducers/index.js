import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable'
import entitiesReducer from './entities'

const defaultState = fromJS({
  domain: {}
})

export default combineReducers({ 
  domain: entitiesReducer
}, defaultState)