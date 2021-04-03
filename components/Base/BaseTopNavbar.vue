<template>
  <div>
    <v-app-bar color="primary" app dark flat>
      <!-- TOOD: change this app-bar-nav-icon to v-icon -->
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-capitalize font-weight-medium">
        {{ pageTitle }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link
        v-for="(item, index) in links"
        :key="index"
        :to="item.link"
        class="pl-3"
      >
        <v-icon>{{ item.icon }}</v-icon>
      </router-link>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: 'BaseTopNavbar',
  data: () => ({
    links: [
      {
        name: 'Cart',
        link: 'cart',
        icon: 'mdi-shopping',
      },
      {
        name: 'Notification',
        link: 'notification',
        icon: 'mdi-bell',
      },
    ],
  }),
  computed: {
    pageTitle() {
      return this.$route.fullPath.substr(1)
    },
  },
}
</script>
<style lang="scss" scoped></style>
