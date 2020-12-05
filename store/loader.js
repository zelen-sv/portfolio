export const state = () => ({
  visible: false,
})

export const getters =  {
  loaderVisible: state => state.visible
}

export const mutations =  {
  SHOW (state) {
    state.visible = true
  },
  HIDE (state) {
    state.visible = false
  }
}

export const actions = {
  showLoader (context) {
    context.commit('SHOW')
  },
  hideLoader (context) {
    context.commit('HIDE')
  }
}
