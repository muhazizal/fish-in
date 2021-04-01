<template>
  <div>
    <v-bottom-navigation color="primary" app grow>
      <v-btn
        v-for="(item, index) in links"
        :key="index"
        :to="item.link"
        class="pa-0"
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
        link: '/home',
        icon: 'mdi-home',
      },
      {
        name: 'Category',
        link: '/category',
        icon: 'mdi-select-group',
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
