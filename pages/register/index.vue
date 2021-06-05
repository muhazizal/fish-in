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
  name: 'RegisterPage',
  layout: 'auth',
  components: {
    AuthForm: () => import('@/components/Base/Auth/AuthForm.vue'),
  },
  data: () => ({
    email: '',
    password: '',
    page: 'register',
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
  },
}
</script>
