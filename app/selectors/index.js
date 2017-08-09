import { createSelector } from 'reselect'
import { toJS } from 'immutable'
 
export const customerSelector = state => state.toJS()

export * from './entities'