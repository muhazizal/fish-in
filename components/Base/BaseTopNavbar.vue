<template>
  <header class="container primary">
    <v-row>
      <v-col cols="12" class="d-flex justify-center align-center">
        <router-link v-if="!needBackButton" to="/beranda">
          <v-icon color="white"> mdi-fish </v-icon>
        </router-link>
        <v-icon v-else color="white" @click="backToPreviousPage()">
          mdi-arrow-left
        </v-icon>
        <v-spacer v-if="!hideSpacer"></v-spacer>
        <v-toolbar-title
          class="white--text text-capitalize font-weight-medium"
          :class="getTitleClass"
        >
          {{ pageTitle }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link
          to="/notification"
          class="pl-3 text-decoration-none"
          :style="getVisibilityHidden"
        >
          <v-icon color="white">mdi-cart</v-icon>
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
        (name && name === 'faq') ||
        (name && name === 'tentang-kami') ||
        (name && name === 'bookmark') ||
        (name && name === 'obrolan-username') ||
        (name && name === 'notifikasi') ||
        (name && name === 'pesanan-detail') ||
        (name && name === 'metode-pembayaran')
      ) {
        return true
      } else {
        return false
      }
    },
    pageTitle() {
      const { name, params } = this.$route
      if (name && name === 'profil-username') {
        return 'profil'
      } else if (name && name === 'tentang-kami') {
        return 'tentang kami'
      } else if (name && name === 'bookmark') {
        return 'daftar bookmark'
      } else if (name && name === 'metode-pembayaran') {
        return 'metode pembayaran'
      } else if (name && name === 'obrolan-username') {
        return params && params.username ? params.username : 'username'
      } else if (name && name === 'notifikasi') {
        return 'notifikasi'
      } else if (name && name === 'pesanan-detail') {
        return params && params.username ? params.username : 'Pesanan'
      } else {
        return name === 'index' ? 'beranda' : name
      }
    },
    getTitleClass() {
      const name = this.$route.name
      if (name && name === 'faq') {
        return 'text-uppercase'
      } else if (name && name === 'obrolan-username') {
        return 'ml-4'
      } else {
        return ''
      }
    },
    getVisibilityHidden() {
      return this.needBackButton ? { visibility: 'hidden' } : ''
    },
    hideSpacer() {
      const { name } = this.$route
      return !!(name && name === 'obrolan-username')
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
