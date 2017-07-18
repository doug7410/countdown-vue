export default function createPersistedState ({ blacklist = [] }) {
  return store => {
    const key = 'vuex'
    const storedState = JSON.parse(window.localStorage.getItem(key))
    const updatedState = { ...store.state, ...storedState }
    store.replaceState(updatedState)

    store.subscribe((mutation, state) => {
      const stateCopy = { ...state }
      blacklist.forEach((key) => {
        delete stateCopy[key]
      })
      window.localStorage.setItem(key, JSON.stringify(stateCopy))
    })
  }
}
