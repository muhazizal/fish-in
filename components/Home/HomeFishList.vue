<template>
  <div>
    <fish-list :title="priceTitle" :items="bestPriceProducts" />
    <fish-list :title="fishTitle" :items="latestProduct" />
  </div>
</template>

<script>
export default {
  name: 'HomeFishList',
  components: {
    FishList: () => import('@/components/Base/Fish/FishList'),
  },
  data: () => ({
    priceTitle: 'Harga Terbaik',
    fishTitle: 'Produk Terbaru',
  }),
  computed: {
    bestPriceProducts() {
      // TODO: change this to fetch item from api
      return [
        {
          name: 'Ikan Lele',
          price: 150000,
          discountedPrice: 100000,
          img: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          name: 'Ikan Nila',
          price: 250000,
          discountedPrice: 200000,
          img: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          name: 'Ikan Bawal',
          price: 350000,
          discountedPrice: 300000,
          img: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
      ]
    },
    latestProduct() {
      // TODO: change this to fetch item from api
      return [
        {
          name: 'Ikan Lele',
          price: 150000,
          img: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          name: 'Ikan Nila',
          price: 250000,
          img: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          name: 'Ikan Bawal',
          price: 350000,
          img: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped></style>
