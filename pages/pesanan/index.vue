<template>
  <div>
    <base-search class="mb-4" :label="searchLabel" />
    <fish-list-pesanan></fish-list-pesanan>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
  components: {
    BaseSearch: () => import('@/components/Base/BaseSearch'),
    FishListPesanan: () => import('@/components/Base/Fish/FishListPesanan'),
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
}
</script>
