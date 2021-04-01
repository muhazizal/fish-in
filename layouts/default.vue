<template>
  <v-app>
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
    BaseBottomNavbar: () => import('@/components/Base/BaseBottomNavbar'),
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Montserrat', sans-serif;

  .container {
    height: 100%;
    max-height: calc(100vh - 56px);
  }
}
</style>
