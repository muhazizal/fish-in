<template>
  <div>
    <v-bottom-navigation
      color="primary"
      app
      class="d-flex flex-row align-center"
    >
      <nuxt-link
        v-for="(item, index) in links"
        :key="index"
        :to="item.link"
        class="text-center text-decoration-none"
        style="width: 100%"
        :style="getLinkStyle(item.name)"
      >
        <v-icon class="d-block" :style="getLinkStyle(item.name)">
          {{ item.icon }}
        </v-icon>
        <span class="d-block" style="font-size: 10px">
          {{ getName(item.name) }}
        </span>
      </nuxt-link>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: 'BaseBottomNavigation',
  data: () => ({
    links: [
      {
        name: 'Index',
        link: '/',
        icon: 'mdi-home',
      },
      {
        name: 'Kategori',
        link: '/kategori',
        icon: 'mdi-select-group',
      },
      {
        name: 'Pesanan',
        link: '/pesanan',
        icon: 'mdi-shopping',
      },
      {
        name: 'Obrolan',
        link: '/obrolan',
        icon: 'mdi-message',
      },
      {
        name: 'Profil',
        link: '/profil',
        icon: 'mdi-account',
      },
    ],
  }),
  methods: {
    getName(name) {
      return name === 'Index' ? 'Beranda' : name
    },
    getLinkStyle(name) {
      let routerName = this.$route.name
      const convertedName = name.toLowerCase()
      if (routerName.includes('profil')) {
        routerName = 'profil'
      }
      if (routerName === convertedName) {
        return {
          color: '#1976d2',
        }
      } else {
        return {
          color: 'grey',
        }
      }
    },
  },
}
</script>
