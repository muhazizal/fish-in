<template>
  <v-container class="pa-0">
    <dialog-profile />
    <profile-account-info />
    <profile-bookmark />
    <profile-more-info />
    <v-row>
      <v-col cols="12" class="px-4 pt-0">
        <v-btn large elevation="2" color="white" class="red--text" width="100%">
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
    DialogProfile: () => import('@/components/Profile/Dialog/DialogProfile'),
    ProfileAccountInfo: () => import('@/components/Profile/ProfileAccountInfo'),
    ProfileBookmark: () => import('@/components/Profile/ProfileBookmark'),
    ProfileMoreInfo: () => import('@/components/Profile/ProfileMoreInfo'),
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
  computed: {
    accountDetail() {
      return this.$store.getters['account/accountDetail']
    },
  },
  async created() {
    await this.getAccountDetail()
    console.log(this.accountDetail)
  },
  methods: {
    async getAccountDetail() {
      await this.$store.dispatch('account/getAccountDetail')
    },
  },
}
</script>
