import { fromJS } from 'immutable'
import { UPDATE_ENTITIES, REPLACE_ENTITIES, REMOVE_ENTITIES, CLEAR_ENTITIES } from '../constants'

const db = {
  customers: {},
}

const initialState = fromJS(db)

export default (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_ENTITIES: {
    const entities = action.payload
    return state.mergeDeep(entities)
  }
  case REPLACE_ENTITIES: {
    const db = action.payload
    let newState = state

    keys(customers).forEach((key) => {
      newState = state.setIn(['customers', key], fromJS(customers[key]))
    })

    return newState
  }
  case CLEAR_ENTITIES: {
    return state.set(action.payload, fromJS({}))
  }
  case REMOVE_ENTITIES: {
    const { type, id } = action.payload
    return state.deleteIn([type, id])
  }

  default:
    return state
  }
}