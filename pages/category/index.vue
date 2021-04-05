<template>
  <div>
    <base-search />
    <fish-list-category :items="listCategory" />
  </div>
</template>

<script>
export default {
  name: 'CategoryPage',
  components: {
    BaseSearch: () => import('@/components/Base/BaseSearch'),
    FishListCategory: () => import('@/components/Base/Fish/FishListCategory'),
  },
  data: () => ({}),
  head() {
    return {
      title: 'Fish-in - Category',
    }
  },
  computed: {
    listCategory() {
      return [
        {
          id: 1,
          nama: 'Ikan Lele',
          rating: 4,
          review: 20,
          harga_kg: 50000,
          harga_ons: 1250,
        },
        {
          id: 2,
          nama: 'Ikan Tongkol',
          rating: 2,
          review: 15,
          harga_kg: 10000,
          harga_ons: 2250,
        },
        {
          id: 3,
          nama: 'Kepiting',
          rating: 5,
          review: 10,
          harga_kg: 110000,
          harga_ons: 5250,
        },
      ]
    },
  },
}
</script>

<style lang="sass" scoped></style>
