<template>
  <div>
    <div class="mb-5">
      <div class="d-flex align-center justify-space-between mb-2">
        <h3 class="mt-2">ID Pesanan : OXO0912XAS</h3>
      </div>
    </div>
    <fish-list-cart :items="listPesanan"></fish-list-cart>
  </div>
</template>

<script>
export default {
  name: 'PesananDetailPageId',
  components: {
    FishListCart: () => import('@/components/Base/Fish/FishListCart'),
    // FishDetailPesanan: () => import('@/components/Base/Fish/FishDetailPesanan'),
  },

  head() {
    return {
      title: 'Detail Pesanan',
      meta: [
        {
          hid: 'detail pesanan',
          name: 'detail pesanan',
          content: 'Halaman detail pesanan Fish-In',
        },
      ],
    }
  },
  computed: {
    // detailPesanan() {
    //   return {
    //     id: 1,
    //     name: 'Ikan Bawal',
    //     jenisIkan: 'Ikan Air Tawar',
    //     jumlahIkan: 5,
    //     hargaIkan: 50000,
    //     ongkir: 15000,
    //     alamat: 'Jalan telekomunikasi bojonng soang, bandung',
    //     telepon: 8712312912,
    //     status: 'Menunggu Konfirmasi',
    //   }
    // },
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
