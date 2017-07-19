import {clientID, clientSecret} from '../../env.js'
import {getHeader} from '../../config.js'
import http from '../../services'

export default {
  state: {
    email: null,
    name: null,
    accessToken: null,
    refreshToken: null,
    id: null
  },

  getters: {
    accessToken: state => state.accessToken
  },

  actions: {
    requestLogin ({commit}, {email, password}) {
      const postData = {
        grant_type: 'password',
        client_id: clientID,
        client_secret: 'Mh25IfvWx1NiRNIaPrHyCTaz5A5fA0QEgB9g0rXg',
        username: email,
        password: password,
        scope: ''
      }

      return http.post('oauth/token', postData).then(response => {
        if (response.status === 200) {
          commit('SAVE_TOKEN', response.data)
          return http.get('api/user', {headers: getHeader()}).then((response) => {
            commit('SET_USER', response.data)
          })
        }
      })
    },

    logoutUser ({commit}) {
      commit('LOGOUT_USER')
      window.localStorage.clear()
    }
  },

  mutations: {
    SAVE_TOKEN (state, data) {
      state.accessToken = data.access_token
      state.refreshToken = data.refresh_token
    },

    SET_USER (state, { email, name, id }) {
      state.name = name
      state.email = email
      state.id = id
    },

    LOGOUT_USER (state) {
      state.accessToken = null
      state.refreshToken = null
      state.name = null
      state.email = null
    }
  }
}
