<template>
  <div>
    <auth-form
      :email="email"
      :password="password"
      :page="page"
      :loading-app="loadingApp"
      @on-change-email="handleChangeEmail"
      @on-change-password="handleChangePassword"
      @on-register-account="handleRegisterAccount"
    />
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  components: {
    AuthForm: () => import('@/components/Base/Auth/AuthForm.vue'),
  },
  layout: 'auth',
  data: () => ({
    email: '',
    password: '',
    page: 'register',
    loadingApp: false,
  }),
  head() {
    return {
      title: 'Register',
    }
  },

  methods: {
    handleChangeEmail(value) {
      this.email = value
    },
    handleChangePassword(value) {
      this.password = value
    },
    async handleRegisterAccount(params) {
      this.loadingApp = true
      await this.$store.dispatch('account/registerAccount', params)
      this.loadingApp = false
    },
  },
}
</script>
