import { normalize } from 'normalizr'
import { customerSchema } from '../entities'
import { updateEntities } from './entities'

export const setCustomer = (customer) => {
    return updateEntities(normalize(customer, customerSchema))
}

export * from './entities'