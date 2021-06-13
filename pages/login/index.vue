<template>
  <div>
    <auth-form
      :email="email"
      :password="password"
      :page="page"
      @on-change-email="handleChangeEmail"
      @on-change-password="handleChangePassword"
      @on-login-account="handleLoginAccount"
    />
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  components: {
    AuthForm: () => import('@/components/Base/Auth/AuthForm.vue'),
  },
  layout: 'auth',
  data: () => ({
    email: '',
    password: '',
    page: 'login',
  }),
  head() {
    return {
      title: 'Login',
    }
  },
  methods: {
    handleChangeEmail(value) {
      this.email = value
    },
    handleChangePassword(value) {
      this.password = value
    },
    async handleLoginAccount() {
      const params = {
        email: this.email,
        password: this.password,
      }
      await this.$store.dispatch('account/loginAccount', params)
    },
  },
}
</script>
