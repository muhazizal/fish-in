<template>
  <div>
    <base-search class="mb-4" :label="searchLabel" />
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
  data() {
    return {
      searchLabel: 'Cari Ikan',
    }
  },
  head() {
    return {
      title: 'Kategori',
      meta: [
        {
          hid: 'kategori',
          name: 'kategori',
          content: 'Halaman kategori ikan Fish-In',
        },
      ],
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
          chevron: true,
        },
        {
          id: 2,
          nama: 'Ikan Tongkol',
          rating: 2,
          review: 15,
          harga_kg: 10000,
          harga_ons: 2250,
          chevron: true,
        },
        {
          id: 3,
          nama: 'Kepiting',
          rating: 5,
          review: 10,
          harga_kg: 110000,
          harga_ons: 5250,
          chevron: true,
        },
      ]
    },
  },
}
</script>

<style lang="sass" scoped></style>
