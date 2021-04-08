<template>
  <v-container class="pa-0">
    <base-search :label="searchLabel" />
    <user-list :messages="messages" />
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
    messages: [
      {
        img: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        sender: 'Apink',
        content: 'Gamers ganteng kayangan',
        date: '4 April 2021',
      },
      {
        img: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        sender: 'Maul',
        content: 'Maul tukang gocek',
        date: '3 April 2021',
      },
      {
        img: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        sender: 'Assad',
        content: 'Bang beli ikan hiu ada nggak?',
        date: '2 April 2021',
      },
      {
        img: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        sender: 'Ridho',
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
