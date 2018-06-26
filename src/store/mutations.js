import * as types from './mutation-types'

const mutations = {
  [types.SET_CART_SERVER_SEARCH](state, cart_server) {
    state.cartServer = cart_server
  },
}

export default mutations
