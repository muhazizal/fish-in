export const state = () => ({
  account: {},
})

export const mutations = {
  SET_ACCOUNT(state, payload) {
    state.account = payload
  },
}

export const actions = {
  async registerAccount({ commit, dispatch }, params) {
    try {
      const response = await this.$axios.post('/api/pembeli', params)
      console.log('Response registerAccount: ', response)

      if (response) {
        const { data, token } = response
        if (data && token) {
          await dispatch.loginAccount(params)
        }
      }
    } catch (error) {
      console.log(error)
    }
  },
  async loginAccount({ commit }, params) {
    try {
      const response = await this.$axios.get('/api/pembeli', params)
      console.log('Response loginAccount: ', response)

      if (response) {
        const { data } = response
        if (data) {
          commit('SET_ACCOUNT', data)
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
