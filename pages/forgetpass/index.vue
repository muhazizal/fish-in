<template>
  <div>
    <forget-pass-form></forget-pass-form>
  </div>
</template>

<script>
export default {
  name: 'ForgetPassPage',
  components: {
    ForgetPassForm: () => import('@/components/ForgetPass/ForgetPassForm'),
  },
  layout: 'auth',
  head() {
    return {
      title: 'ForgetPass',
    }
  },
}
</script>
