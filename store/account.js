export const state = () => ({
  accountDetail: {},
})
export const mutations = {
  SET_ACCOUNT_DETAIL(state, payload) {
    state.accountDetail = payload
  },
}
export const actions = {
  async getAccountDetail({ commit }) {
    const data = {
      email: 'coba@pembeli.com',
      password: 'cobacom',
    }
    try {
      const response = await this.$axios.get('/pembeli', data)
      console.log(response)

      if (response) {
        if (response.status === 200) {
          const { data } = response
          commit('SET_ACCOUNT_DETAIL', data)
        }
      }
    } catch (error) {
      console.log(error)
    }
  },
}
export const getters = {
  accountDetail(state) {
    return state.accountDetail
  },
}
