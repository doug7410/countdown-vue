import http from '../../services'
import {getHeader} from '../../config.js'

export default {
  state: {
    image: null
  },

  actions: {
    uploadImage ({ commit, getters }, image) {
      let data = new FormData()
      data.append('image', image)
      data.append('countdown_id', getters.currentCountdown.id)
      http.post('api/images', data, {
        headers: {...getHeader(), ...{'content-type': 'multipart/form-data'}}
      }).then((image) => {
        commit('ADD_IMAGE_TO_COUNTDOWN', image.data)
      })
    },
    removeImage ({getters, commit}, id) {
      return http.delete(`api/images/${id}`, {headers: getHeader()}).then(() => {
        getters.currentCountdown.images.forEach((image, index) => {
          if (image.id === id) {
            commit('REMOVE_IMAGE_FROM_COUNTDOWN', index)
          }
        })
      })
    }
  },
  mutations: {

  }
}
