export const state = () => ({
  account: {},
  isAuthenticated: false,
})

export const mutations = {
  SET_ACCOUNT(state, payload) {
    state.account = payload
  },
  SET_IS_AUTHENTICATED(state, payload) {
    state.isAuthenticated = payload
  },
}

export const actions = {
  async registerAccount({ dispatch }, params) {
    try {
      const response = await this.$axios.post('/api/pembeli', params)
      console.log('Response registerAccount: ', response)
      if (response) {
        await dispatch('loginAccount', params)
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
        const { data, token } = response
        console.log(token)
        if (data && token) {
          localStorage.setItem('usr_tkn', token)
          commit('SET_ACCOUNT', data)
          commit('SET_IS_AUTHENTICATED', true)
          this.$router.push('/')
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
