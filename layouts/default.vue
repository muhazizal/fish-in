<template>
  <v-app>
    <base-top-navbar />
    <v-main :style="getMarginTop">
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
        routeName.includes('tentang-kami') ||
        (routeName && routeName.includes('bookmark'))
      ) {
        return false
      } else {
        return true
      }
    },
    getMarginTop() {
      const routeName = this.$route.name
      switch (routeName) {
        case 'obrolan':
        case 'kategori':
        case 'pesanan':
          return {
            marginTop: '114px',
          }
        default:
          return {
            marginTop: '54px',
          }
      }
    },
  },
  async created() {
    await this.handleGetAccount()
  },
  methods: {
    async handleGetAccount() {
      const role = 'pembeli'
      await this.$store.dispatch('account/account', role)
    },
  },
}
</script>
