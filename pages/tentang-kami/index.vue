<template>
  <v-container class="pa-0">
    <h2>Fish-In App</h2>
    <p>Created by</p>
    <user-list-card />
  </v-container>
</template>
<script>
export default {
  name: 'AboutUsPage',
  components: {
    UserListCard: () => import('@/components/Base/User/UserListCard'),
  },
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
