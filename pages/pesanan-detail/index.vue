<template>
  <div>
    <fish-detail-pesanan :item="detailPesanan"></fish-detail-pesanan>
  </div>
</template>

<script>
export default {
  name: 'PesananDetail',
  components: {
    FishDetailPesanan: () => import('@/components/Base/Fish/FishDetailPesanan'),
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
    detailPesanan() {
      return {
        id: 1,
        name: 'Ikan Bawal',
        jenisIkan: 'Ikan Air Tawar',
        jumlahIkan: 5,
        hargaIkan: 50000,
        ongkir: 15000,
        alamat: 'Jalan telekomunikasi bojonng soang, bandung',
        telepon: 8712312912,
        status: 'Menunggu Konfirmasi',
      }
    },
  },
}
</script>
