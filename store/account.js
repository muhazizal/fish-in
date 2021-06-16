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
    const data = {
      email: params.email,
      password: params.password,
    }
    try {
      console.log('Params registerAccount: ', params)
      const response = await this.$axios.$post(
        `/api/${params.role}/register/`,
        data
      )
      console.log('Response registerAccount: ', response)
      if (response) {
        await dispatch('loginAccount', params)
      }
    } catch (error) {
      console.log(error)
    }
  },
  async loginAccount({ commit }, params) {
    const data = {
      email: params.email,
      password: params.password,
    }
    try {
      console.log('Params loginAccount: ', params)
      const response = await this.$axios.$post(
        `/api/${params.role}/login/`,
        data
      )
      console.log('Response loginAccount: ', response)
      if (response) {
        const { data, token } = response
        if (data && token) {
          this.$cookies.set('auth_token', token, {
            secure: true,
          })
          commit('SET_ACCOUNT', data)
          if (params.role === 'pembeli') {
            this.$router.push('/')
          } else {
            this.$router.push('/penjual')
          }
        }
      }
    } catch (error) {
      console.log(error)
    }
  },
  async account({ commit }, role) {
    try {
      const userToken = this.$cookies.get('auth_token')
      const response = await this.$axios.get(`/api/${role}`, {
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
