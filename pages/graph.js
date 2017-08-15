import { Component } from 'react'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import withRedux from '../lib/withRedux'
import { setCustomer } from '../app/actions'
import { selectorCustomer } from '../app/selectors'

class CustomerPage extends Component {
    static contextTypes = {
      api: PropTypes.any
    }

    static async getInitialProps({ api, store }) {
      const { data } = await api.query({
        query: gql`
                {
                    catShop {
                        name
                        address
                        cats {
                            name
                            picture
                        } 
                    }
                }
            `
      })

      store.dispatch(setCustomer({ ...data.catShop, id: '1' }))
    }

    render() {
      const { customer, url } = this.props
      return (
        <div>
          {customer.name} {customer.address}
          <ul>
            {customer.cats && customer.cats.map(v => (<li>{v.name}</li>))}
          </ul>
        </div>
      )
    }

}

export default withRedux(createStructuredSelector({
  customer: selectorCustomer('1')
}))(CustomerPage)