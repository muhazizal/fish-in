<template>
  <div>
    <base-search class="mb-4" :label="searchLabel" />
    <fish-list-category :items="filteredFishList" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
    ...mapGetters({
      fishList: 'fish/getFishList',
    }),
    filteredFishList() {
      const { query } = this.$route
      console.log('query: ', query)
      if (query) {
        const filteredFishList = this.fishList.filter((fish) => {
          for (const key in query) {
            if (key === 'harga' || key === 'kuantitas') {
              query[key] = parseInt(query[key])
              if (fish[key] === undefined || fish[key] < query[key]) {
                return false
              }
            }
            if (key === 'jenis') {
              if (fish[key] === undefined || fish[key] !== query[key]) {
                return false
              }
            }
            if (key === 'nama_produk') {
              if (
                fish[key] === undefined ||
                fish[key].toLowerCase() !==
                  query[key].split('_').join(' ').toLowerCase()
              ) {
                return false
              }
            }
          }
          return true
        })
        return filteredFishList
      }
      return [{}]
    },
  },
  async created() {
    await this.handleGetFishList()
  },
  methods: {
    async handleGetFishList() {
      await this.$store.dispatch('fish/fishList')
    },
  },
}
</script>

<style lang="sass" scoped></style>
