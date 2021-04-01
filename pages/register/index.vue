<template>
  <div>
      <register-form></register-form>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  components:{
        RegisterForm: () => import('@/components/Register/RegisterForm'),
  },
  head() {
    return {
      title: 'Register',
    }
  },
}
</script>