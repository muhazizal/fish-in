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
      console.log('Params registerAccount: ', params)
      const response = await this.$axios.post('/api/pembeli/register', params)
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
      console.log('Params loginAccount: ', params)
      const response = await this.$axios.post('/api/pembeli/login', params)
      console.log('Response loginAccount: ', response)
      if (response) {
        const { data, token } = response.data
        console.log('token: ', token)
        console.log('data: ', data)
        if (data && token) {
          this.$cookies.set('auth_token', token, {
            secure: true,
          })
          commit('SET_ACCOUNT', data)
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
