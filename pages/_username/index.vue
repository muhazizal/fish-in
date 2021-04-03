<template>
  <v-container class="pa-0">
    <dialog-profile />
    <profile-account-info />
    <profile-bookmark />
  </v-container>
</template>

<script>
export default {
  name: 'ProfilePage',
  components: {
    DialogProfile: () => import('@/components/Profile/Dialog/DialogProfile'),
    ProfileAccountInfo: () => import('@/components/Profile/ProfileAccountInfo'),
    ProfileBookmark: () => import('@/components/Profile/ProfileBookmark'),
  },
  head() {
    return {
      title: 'Profile',
    }
  },
}
</script>
