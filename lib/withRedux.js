import { Component } from 'react'
import { fromJS } from 'immutable'
import PropTypes from 'prop-types'
import withRedux from 'next-redux-wrapper'
import createStore from '../store'
import initApi from '../lib/initApi'

const defaultMapStateToProps = state => ({}) 

export default (mapStateToProps = defaultMapStateToProps) => ComposedComponent => {
  const api = initApi()

  return withRedux(createStore, mapStateToProps)(class extends Component {
        static childContextTypes = {
          api: PropTypes.any.isRequired
        }

        static async getInitialProps(ctx) {
          let composedProps = {}

          if (ComposedComponent.getInitialProps) {
            composedProps = await ComposedComponent.getInitialProps({
              ...ctx, api
            })
          }

          return composedProps
        }

        getChildContext() {
          return { api }
        }

        render() {
          return <ComposedComponent {...this.props} />
        }

  })
}