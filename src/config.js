import store from './vuex/store'
export const apiDomain = process.env.API_BASE_URL

export const getHeader = function () {
  return {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + store.getters.accessToken
  }
}
