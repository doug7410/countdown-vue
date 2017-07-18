import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import countdown from './modules/countdown'
import imageManager from './modules/image-manager'
import persistedState from './plugins/persistedState'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    countdown,
    imageManager
  },
  plugins: [
    persistedState({blacklist: ['route']})
  ]
})
