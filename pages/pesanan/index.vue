<template>
  <div>
    <base-search class="mb-4" :label="searchLabel" />
    <fish-list-cart :items="listPesanan"></fish-list-cart>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
  components: {
    BaseSearch: () => import('@/components/Base/BaseSearch'),
    FishListCart: () => import('@/components/Base/Fish/FishListCart'),
  },
  data: () => ({
    searchLabel: 'Cari Pesanan',
  }),
  head() {
    return {
      title: 'Pesanan',
      meta: [
        {
          hid: 'pesanan',
          name: 'pesanan',
          content: 'Halaman pesanan Fish-In',
        },
      ],
    }
  },
  computed: {
    listPesanan() {
      return [
        {
          id: 1,
          name: 'Ikan Bawal',
          jenisIkan: 'Ikan Air Tawar',
          jumlahIkan: 5,
          hargaIkan: 50000,
          ongkir: 15000,
        },
        {
          id: 2,
          name: 'Ikan Lele',
          jenisIkan: 'Ikan Air Tawar',
          jumlahIkan: 2,
          hargaIkan: 20000,
          ongkir: 15000,
        },
        {
          id: 3,
          name: 'Ikan Mujair',
          jenisIkan: 'Ikan Air Laut',
          jumlahIkan: 4,
          hargaIkan: 30000,
          ongkir: 15000,
        },
        {
          id: 4,
          name: 'Kepiting',
          jenisIkan: 'Ikan Air Laut',
          jumlahIkan: 10,
          hargaIkan: 10000,
          ongkir: 15000,
        },
      ]
    },
  },
}
</script>
