<template>
  <div>
    <v-bottom-navigation color="primary" app>
      <v-btn
        v-for="(item, index) in links"
        :key="index"
        :to="item.link"
        class="pa-0"
        max-width="44px"
      >
        <span>{{ item.name }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: 'BaseBottomNavigation',
  data: () => ({
    links: [
      {
        name: 'Home',
        link: '/',
        icon: 'mdi-home',
      },
      {
        name: 'Category',
        link: '/category',
        icon: 'mdi-select-group',
      },
      {
        name: 'Cart',
        link: '/cart',
        icon: 'mdi-shopping',
      },
      {
        name: 'Message',
        link: '/message',
        icon: 'mdi-message',
      },
      {
        name: 'Profile',
        link: '/:username',
        icon: 'mdi-account',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped></style>
