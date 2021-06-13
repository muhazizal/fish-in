export const state = () => ({
  fishList: [],
})

export const mutations = {
  SET_FISH_LIST(state, payload) {
    state.fishList = payload
  },
}

export const actions = {
  async fishList({ commit }) {
    try {
      const response = await this.$axios.get('/produk')
      console.log('Response fishList: ', response)
      if (response) {
        const { data } = response
        commit('SET_FISH_LIST', data)
      }
    } catch (error) {
      console.log(error)
    }
  },
}

export const getters = {
  getFishList(state) {
    return state.fishList
  },
}
