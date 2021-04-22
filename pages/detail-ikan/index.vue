<template>
  <div>
    <fish-detail-pesanan :item="detailPesanan"></fish-detail-pesanan>
  </div>
</template>

<script>
export default {
  name: 'FishDetail',
  components: {
    FishDetail: () => import('@/components/Base/Fish/FishDetail'),
  },

  head() {
    return {
      title: 'Detail Ikan',
      meta: [
        {
          hid: 'detail ikan',
          name: 'detail ikan',
          content: 'Halaman detail ikan Fish-In',
        },
      ],
    }
  }
}