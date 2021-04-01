<template>
  <v-app>
    <base-top-navbar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <base-bottom-navbar />
  </v-app>
</template>

<script>
export default {
  components: {
    BaseTopNavbar: () => import('@/components/Base/BaseTopNavbar'),
    BaseBottomNavbar: () => import('@/components/Base/BaseBottomNavbar'),
  },
  middleware: 'auth',
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Montserrat', sans-serif;

  .container {
    height: 100%;
  }
}
</style>
