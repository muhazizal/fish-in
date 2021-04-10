<template>
  <v-app>
    <base-top-navbar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <base-bottom-navbar v-if="showBaseBottomNavbar" />
  </v-app>
</template>

<script>
export default {
  components: {
    BaseTopNavbar: () => import('@/components/Base/BaseTopNavbar'),
    BaseBottomNavbar: () => import('@/components/Base/BaseBottomNavbar'),
  },
  middleware: 'auth',
  computed: {
    showBaseBottomNavbar() {
      const routeName = this.$route.name
      if (
        (routeName && routeName.includes('faq')) ||
        routeName.includes('tentang-kami')
      ) {
        return false
      } else {
        return true
      }
    },
  },
}
</script>
