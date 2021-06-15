<template>
  <v-container
    class="pa-0 d-flex flex-column"
    style="height: calc(100vh - 78px)"
  >
    <h2 class="text-h2 text-center mt-8" style="font-size: 28px !important">
      Fish-In App
    </h2>
    <p class="text-center text-subtitle-1 mb-8 grey--text text--darken-1">
      Created by
    </p>
    <user-list :users="users" />
    <p
      class="text-center text-subtitle-2 mt-16 mb-0 grey--text text--darken-1 font-weight-regular"
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
        fullname: 'Muhammad Ridho Saputra',
        content: '1301184402 - Backend Developer',
      },
      {
        img: require('~/assets/images/pp-assad.jpg'),
        fullname: 'Muhammad Aziz Al-assad',
        content: '1301180044 - Frontend Developer',
      },
      {
        img: require('~/assets/images/pp-maul.png'),
        fullname: 'Maulana Irfan Firdian',
        content: '1301180294 - Frontend Developer',
      },
      {
        img: require('~/assets/images/pp-apink.jpg'),
        fullname: 'Naufal Alvin Chandrasa',
        content: '1301180214 - Frontend Developer',
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
