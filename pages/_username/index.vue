<template>
  <v-container class="pa-0">
    <dialog-profile />
    <profile-account />
  </v-container>
</template>

<script>
export default {
  name: 'ProfilePage',
  components: {
    DialogProfile: () => import('@/components/Profile/Dialog/DialogProfile'),
    ProfileAccount: () => import('@/components/Profile/ProfileAccount'),
  },
  head() {
    return {
      title: 'Profile',
    }
  },
}
</script>
