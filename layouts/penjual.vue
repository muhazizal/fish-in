<template>
  <v-app>
    <v-main :style="getMarginTop">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  middleware: 'auth',
  async created() {
    await this.handleGetAccount()
  },
  methods: {
    async handleGetAccount() {
      const role = 'penjual'
      await this.$store.dispatch('account/account', role)
    },
  },
}
</script>
