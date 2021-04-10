<template>
  <header class="container primary">
    <v-row>
      <v-col cols="12" class="d-flex justify-center align-center">
        <!-- TOOD: change this app-bar-nav-icon to v-icon -->
        <router-link v-if="!needBackButton" to="/beranda">
          <v-icon color="white"> mdi-fish </v-icon>
        </router-link>
        <v-icon v-else color="white" @click="backToPreviousPage()">
          mdi-arrow-left
        </v-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title
          class="white--text text-capitalize font-weight-medium"
          :class="faqTitleStyle"
        >
          {{ pageTitle }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link
          v-if="!needBackButton"
          to="/notification"
          class="pl-3 text-decoration-none"
        >
          <v-icon color="white">mdi-bell</v-icon>
        </router-link>
      </v-col>
      <base-tab-options />
    </v-row>
  </header>
</template>
<script>
export default {
  name: 'BaseTopNavbar',
  components: {
    BaseTabOptions: () => import('./BaseTabOptions'),
  },
  computed: {
    needBackButton() {
      const name = this.$route.name
      if (
        (name && name.includes('faq')) ||
        (name && name.includes('tentang-kami')) ||
        (name && name.includes('bookmark'))
      ) {
        return true
      } else {
        return false
      }
    },
    pageTitle() {
      const name = this.$route.name
      if (name && name.includes('profil')) {
        return 'profil'
      } else if (name && name.includes('tentang-kami')) {
        return 'tentang kami'
      } else if (name && name.includes('bookmark')) {
        return 'daftar bookmark'
      } else {
        return name
      }
    },
    faqTitleStyle() {
      const name = this.$route.name
      if (name && name.includes('faq')) {
        return 'text-uppercase'
      }
      return ''
    },
  },
  methods: {
    goToHome() {
      return this.$router.push('/beranda')
    },
    backToPreviousPage() {
      return this.$router.back()
    },
  },
}
</script>
<style lang="scss" scoped>
header {
  position: fixed;
  z-index: 100;
}
</style>
