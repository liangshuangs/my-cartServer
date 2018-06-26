import * as types from './mutation-types'

export const queryCartServer = function ({commit}, query) {

  commit(types.SET_CART_SERVER_SEARCH, saveSearch(query))
}

export const deleteFavoriteList = function ({commit}, song) {
  commit(types.SET_FAVORITE_LIST, deleteFavorite(song))
}
