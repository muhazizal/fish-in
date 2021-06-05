<template>
  <div>
    <auth-form
      @on-handle-change-email="handleChangeEmail"
      @on-handle-change-password="handleChangePassword"
      :email="email"
      :password="password"
      :page="page"
    />
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'auth',
  components: {
    AuthForm: () => import('@/components/Base/Auth/AuthForm.vue'),
  },
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
  },
}
</script>
