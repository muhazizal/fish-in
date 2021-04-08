<template>
  <header class="container primary">
    <v-row>
      <v-col cols="12" class="d-flex justify-center align-center">
        <!-- TOOD: change this app-bar-nav-icon to v-icon -->
        <v-icon color="white">mdi-fish</v-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title class="white--text text-capitalize font-weight-medium">
          {{ pageTitle }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link
          v-for="(item, index) in links"
          :key="index"
          :to="item.link"
          class="pl-3 text-decoration-none"
        >
          <v-icon color="white">{{ item.icon }}</v-icon>
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
  data: () => ({
    links: [
      {
        name: 'Pesanan',
        link: '/pesanan',
        icon: 'mdi-shopping',
      },
      {
        name: 'Notification',
        link: '/',
        icon: 'mdi-bell',
      },
    ],
  }),
  computed: {
    pageTitle() {
      const name = this.$route.name
      if (name && name.includes('profil')) {
        return 'profil'
      } else {
        return name
      }
    },
  },
}
</script>
<style lang="scss" scoped></style>
