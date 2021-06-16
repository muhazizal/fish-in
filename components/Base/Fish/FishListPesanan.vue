<template>
  <div>
    <v-card class="pa-5 mb-5">
      <div class="d-flex align-center justify-space-between mb-2">
        <h3 class="mt-2">ID Pesanan : OXO0912XAS</h3>
      </div>
      <div class="d-flex">
        <v-btn
          class="mx-auto"
          depressed
          color="primary"
          @click="handleRedirectDetailPesanan"
        >
          Detail Pesanan
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'FishListPesanan',
  methods: {
    handleRedirectDetailPesanan() {
      this.$router.push(`/pesanan-detail`)
    },
  },
}
</script>

<style></style>
