import { fromJS } from 'immutable'
import { UPDATE_ENTITIES, REPLACE_ENTITIES, REMOVE_ENTITIES, CLEAR_ENTITIES } from '../constants'

export const clearEntities = name => ({
  type: CLEAR_ENTITIES,
  payload: name,
})

export const updateEntities = entities => ({
  type: UPDATE_ENTITIES,
  payload: fromJS(entities),
})

export const replaceEntities = entities => ({
  type: REPLACE_ENTITIES,
  payload: fromJS(entities),
})

export const removeEntities = (type, id) => ({
  type: REMOVE_ENTITIES,
  payload: { type, id },
})