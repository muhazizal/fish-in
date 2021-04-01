<template>
  <div>
    <login-form></login-form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  components: {
    LoginForm: () => import('@/components/Login/LoginForm'),
  },
  head() {
    return {
      title: 'Login',
    }
  },
}
</script>
