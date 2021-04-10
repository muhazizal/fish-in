<template>
  <v-container class="pa-0">
    <base-search :label="searchLabel" />
    <user-list :users="users" :show-cta="showCta" />
  </v-container>
</template>

<script>
export default {
  name: 'MessagePage',
  components: {
    UserList: () => import('@/components/Base/User/UserList'),
    BaseSearch: () => import('@/components/Base/BaseSearch'),
  },
  data: () => ({
    searchLabel: 'Cari Obrolan',
    showCta: true,
    users: [
      {
        username: 'apink',
        fullname: 'Apink',
        img: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        content: 'Gamers ganteng kayangan',
        date: '4 April 2021',
      },
      {
        username: 'maul',
        fullname: 'Maul',
        img: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        content: 'Maul tukang gocek',
        date: '3 April 2021',
      },
      {
        username: 'assad',
        fullname: 'Assad',
        img: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        content: 'Bang beli ikan hiu ada nggak?',
        date: '2 April 2021',
      },
      {
        username: 'ridho',
        fullname: 'Ridho',
        img: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        content: 'Bang lau jual apa aja?',
        date: '1 April 2021',
      },
    ],
  }),
  head() {
    return {
      title: 'Obrolan',
      meta: [
        {
          hid: 'obrolan',
          name: 'obrolan',
          content: 'Halaman obrolan Fish-In',
        },
      ],
    }
  },
}
</script>
