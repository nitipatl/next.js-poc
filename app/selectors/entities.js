import { createSelector } from 'reselect';

const createSchemaSelector = schema => createSelector(
  state => state.getIn(['domain', 'entities', schema]),
  model =>
    model
      .toArray()
      .map(value => value.toJS())
);

const createEntitySelector = (schema, id) => createSelector(
  state => state.getIn(['domain', 'entities', schema]),
  model => model.has(id) ? model.get(id).toJS() : {} //eslint-disable-line
);

export const selectorCustomers = createSchemaSelector('customers');
export const selectorCustomer = id => createEntitySelector('customers', id);