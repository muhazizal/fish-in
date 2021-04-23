<template>
  <div>
    <span
      ><small class="text--secondary">Penjual : </small>
      <small>Sidul Store</small>
    </span>
    <v-divider></v-divider>
    <fish-list-item-category class="mt-5" :item="detailFish" />
    <v-divider></v-divider>
    <div class="mt-2">
      <fish-total-harga :price="detailFish" />
    </div>
    <v-divider></v-divider>
    <button-finish title="Pesan Sekarang" />
  </div>
</template>

<script>
export default {
  name: 'BeliSekarang',
  components: {
    FishListItemCategory: () =>
      import('@/components/Base/Fish/FishListItemCategory'),
    FishTotalHarga: () => import('@/components/Base/Fish/FishTotalHarga'),
    ButtonFinish: () => import('@/components/Base/ButtonFinish'),
  },

  head() {
    return {
      title: 'Beli Sekarang',
      meta: [
        {
          hid: 'beli sekarang',
          name: 'beli sekarang',
          content: 'Halaman beli sekarang Fish-In',
        },
      ],
    }
  },
  computed: {
    detailFish() {
      return {
        nama: 'Ikan Nila',
        jumlahIkan: 5,
        hargaIkan: 50000,
        ongkir: 15000,
        harga_kg: 20000,
        harga_ons: 15000,
        rating: 5,
        chevron: false,
      }
    },
  },
}
</script>
