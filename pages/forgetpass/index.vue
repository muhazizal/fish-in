<template>
  <div>
    <login-form></login-form>
  </div>
</template>

<script>
export default {
  name: 'ForgetPassPage',
  components: {
    LoginForm: () => import('@/components/ForgetPass/ForgetPassForm'),
  },
  layout: 'auth',
  head() {
    return {
      title: 'ForgetPass',
    }
  },
}
</script>
