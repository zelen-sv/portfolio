export const state = () => ({
  activeBlock: 'about',
  sections: [ 'about', 'skills', 'projects', 'articles', 'contact' ]
})

export const getters =  {
  active: state => state.activeBlock,
  sections: state => state.sections
}

export const mutations =  {
  SET_ACTIVE_BLOCK (state, payload) {
    state.activeBlock = payload
  }
}

export const actions = {
  updatePaginator (context, payload) {
    context.commit('SET_ACTIVE_BLOCK', payload)
  }
}
