<template>
  <v-container class="pa-0">
    <base-search class="mb-6" :label="label" :page="page" />
    <v-row class="px-1">
      <v-col
        v-for="(item, index) in filteredBookmark"
        :key="index"
        cols="12"
        class="px-2 py-2"
      >
        <fish-list-item
          :item="item"
          :hide-margin="hideMargin"
          :show-bookmark="showBookmark"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'BookmarkPage',
  components: {
    BaseSearch: () => import('@/components/Base/BaseSearch'),
    FishListItem: () => import('@/components/Base/Fish/FishListItem'),
  },
  data: () => ({
    label: 'Cari Bookmark',
    hideMargin: true,
    showBookmark: true,
    bookmark: [],
    page: 'bookmark',
  }),
  head() {
    return {
      title: 'Bookmark',
      meta: [
        {
          hid: 'bookmark',
          name: 'bookmark',
          content: 'Halaman bookmark Fish-In',
        },
      ],
    }
  },
  computed: {
    filteredBookmark() {
      const { query } = this.$route
      if (query) {
        const filteredBookmark = this.bookmark.filter((item) => {
          for (const key in query) {
            if (key === 'nama_produk') {
              if (
                item[key] === undefined ||
                item[key]
                  .toLowerCase()
                  .includes(query[key].split('_').join(' ').toLowerCase())
              ) {
                return false
              }
            }
          }
          return true
        })
        return filteredBookmark
      }
      return [{}]
    },
  },
  async created() {
    await this.getBookmark()
  },
  methods: {
    async getBookmark() {
      try {
        const userToken = this.$cookies.get('auth_token')
        const response = await this.$axios.get('/api/bookmark', {
          headers: {
            authorization: userToken,
          },
        })
        console.log('Response getBookmark: ', response)
        if (response) {
          this.bookmark = response.data.data
        }
      } catch (error) {
        console.log('Error getBookmark: ', error)
      }
    },
  },
}
</script>
