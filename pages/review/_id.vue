<template>
  <div>
    <h3 class="mb-3">Berikan Review untuk produk ini</h3>
    <fish-review :item="reviewPesanan"></fish-review>
  </div>
</template>

<script>
export default {
  name: 'ReviewPageDetail',
  components: {
    FishReview: () => import('@/components/Base/Fish/FishReview'),
  },

  head() {
    return {
      title: 'review Pesanan',
      meta: [
        {
          hid: 'Review pesanan',
          name: 'review pesanan',
          content: 'Halaman review pesanan Fish-In',
        },
      ],
    }
  },
  computed: {
    reviewPesanan() {
      return {
        id: 1,
        name: 'Ikan Bawal',
        jenisIkan: 'Ikan Air Tawar',
        jumlahIkan: 5,
        hargaIkan: 50000,
        ongkir: 15000,
      }
    },
  },
}
</script>

<style></style>
