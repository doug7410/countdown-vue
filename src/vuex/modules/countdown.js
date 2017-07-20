import http from '../../services'
import {getHeader} from '../../config.js'

export default {
  state: {
    currentCountdown: {},
    countdowns: {}
  },

  getters: {
    currentCountdown: state => state.currentCountdown,
    countdowns: state => state.countdowns
  },

  actions: {
    createCountdown ({ commit }, countdown) {
      return http.post('/api/countdown', countdown, {headers: getHeader()}).then(response => {
        commit('SET_CURRENT_COUNTDOWN', response.data)
      })
    },
    updateCountdown ({ commit }, countdown) {
      return http.put('/api/countdown', countdown, {headers: getHeader()}).then(response => {
        commit('UPDATE_CURRENT_COUNTDOWN', response.data)
      })
    },
    getCountdown ({ commit, getters }, id) {
      getters.countdowns.forEach((countdown) => {
        if (countdown.id.toString() === id.toString()) {
          commit('SET_CURRENT_COUNTDOWN', countdown)
        }
      })
    },
    getCountdowns ({ commit }) {
      return http.get('/api/countdowns', {headers: getHeader()}).then((response) => {
        commit('SET_USER_COUNTDOWNS', response.data)
      })
    },
    getImages ({ commit, getters }) {
      return http.get(`/api/countdown/${getters.currentCountdown.id}/images`, {headers: getHeader()}).then((images) => {
        commit('SET_IMAGES', images.data)
      })
    }
  },

  mutations: {
    SET_CURRENT_COUNTDOWN (state, countdown) {
      state.currentCountdown = countdown
    },

    SET_IMAGES (state, images) {
      state.currentCountdown.images = images
    },

    SET_USER_COUNTDOWNS (state, countdowns) {
      state.countdowns = countdowns
    },

    UPDATE_CURRENT_COUNTDOWN (state, {date, name}) {
      state.currentCountdown.name = name
      state.currentCountdown.date = date
    },
    REMOVE_IMAGE_FROM_COUNTDOWN (state, index) {
      state.currentCountdown.images.splice(index, 1)
    },
    ADD_IMAGE_TO_COUNTDOWN (state, image) {
      state.currentCountdown.images.push(image)
    }
  }
}
