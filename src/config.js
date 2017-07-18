import store from './vuex/store'

export const apiDomain = 'https://countdown-vue.herokuapp.com'
// 'http://countdown.dev/'

export const getHeader = function () {
  return {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + store.getters.accessToken
  }
}
