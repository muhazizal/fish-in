<template>
  <v-container class="pa-0">
    <profile-account />
    <profile-bookmark />
    <profile-more-info />
    <v-row>
      <v-col cols="12" class="px-4 pt-0">
        <v-btn
          large
          elevation="2"
          color="red lighten-1"
          class="white--text"
          width="100%"
          :disabled="loading"
          :loading="loading"
          @click="handleLogoutAccount"
        >
          Keluar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ProfilePage',
  components: {
    ProfileAccount: () => import('@/components/Profile/ProfileAccount'),
    ProfileBookmark: () => import('@/components/Profile/ProfileBookmark'),
    ProfileMoreInfo: () => import('@/components/Profile/ProfileMoreInfo'),
  },
  data() {
    return {
      loading: false,
    }
  },
  head() {
    return {
      title: 'Profil',
      meta: [
        {
          hid: 'profil',
          name: 'profil',
          content: 'Halaman profil user Fish-In',
        },
      ],
    }
  },
  methods: {
    handleLogoutAccount() {
      this.loading = true
      this.$store.dispatch('account/logoutAccount')
      this.loading = false
      this.$router.push('/')
    },
  },
}
</script>
