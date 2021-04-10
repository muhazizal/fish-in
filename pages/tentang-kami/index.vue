<template>
  <v-container class="pa-0">
    <h2 class="text-h2" style="font-size: 28px !important">Fish-In App</h2>
    <p class="text-subtitle-1 mb-6 grey--text text--darken-1">Created by:</p>
    <user-list :users="users" />
  </v-container>
</template>
<script>
export default {
  name: 'AboutUsPage',
  components: {
    UserList: () => import('@/components/Base/User/UserList'),
  },
  data: () => ({
    users: [
      {
        img: require('~/assets/images/pp-ridho.jpg'),
        sender: 'Muhammad Ridho Saputra',
        content: '1301184402',
      },
      {
        img: require('~/assets/images/pp-assad.jpg'),
        sender: 'Muhammad Aziz Al-assad',
        content: '1301180044',
      },
      {
        img: '',
        sender: 'Maulana Irfan Firdian',
        content: '1301180294',
      },
      {
        img: '',
        sender: 'Naufal Alvin Chandrasa',
        content: '1301180214',
      },
    ],
  }),
  head() {
    return {
      title: 'Tentang Kami',
      meta: [
        {
          hid: 'tentang kami',
          name: 'tentang kami',
          content: 'Halaman tentang kami Fish-In',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped></style>
