<template>
  <v-container
    class="pa-0 d-flex flex-column justify-center"
    style="height: calc(100vh - 134px)"
  >
    <h2 class="text-h2 text-center" style="font-size: 28px !important">
      Fish-In App
    </h2>
    <p class="text-center text-subtitle-1 mb-8 grey--text text--darken-1">
      Created by
    </p>
    <user-list :users="users" />
    <p
      class="text-center text-subtitle-2 mt-8 mb-0 grey--text text--darken-1 font-weight-regular"
    >
      &copy; 2021 Fish-In - All Rights Reserved
    </p>
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
