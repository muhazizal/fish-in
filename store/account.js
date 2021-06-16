export const state = () => ({
  account: {},
})
export const mutations = {
  SET_ACCOUNT(state, payload) {
    state.account = payload
  },
  RESET_ACCOUNT(state) {
    state.account = {}
  },
}
export const actions = {
  async registerAccount({ dispatch }, params) {
    try {
      console.log('Params registerAccount: ', params)
      const response = await this.$axios.$post('/api/pembeli/register/', params)
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
      const response = await this.$axios.$post('/api/pembeli/login/', params)
      console.log('Response loginAccount: ', response)
      if (response) {
        const { data, token } = response
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
  async account({ commit }) {
    try {
      const userToken = this.$cookies.get('auth_token')
      const response = await this.$axios.get(`/api/pembeli`, {
        headers: {
          authorization: userToken,
        },
      })
      console.log('Response account: ', response)
      if (response) {
        const { data } = response.data
        if (data) {
          commit('SET_ACCOUNT', data)
        }
      }
    } catch (error) {
      console.log(error)
    }
  },
  async editProfile({ commit }, params) {
    try {
      const userToken = this.$cookies.get('auth_token')
      const response = await this.$axios.put(`/api/pembeli/`, params, {
        headers: {
          authorization: userToken,
        },
      })
      console.log('Response editProfile: ', response)
      if (response) {
        const { data } = response.data
        if (data) {
          commit('SET_ACCOUNT', data)
        }
      }
    } catch (error) {
      console.log(error)
    }
  },
  logoutAccount({ commit }) {
    const userToken = this.$cookies.get('auth_token')
    if (userToken) {
      this.$cookies.remove('auth_token')
      commit('RESET_ACCOUNT')
    }
  },
}
export const getters = {
  getAccount(state) {
    return state.account
  },
}
