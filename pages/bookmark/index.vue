<template>
  <v-container class="pa-0">
    <base-search class="mb-6" :label="label" />
    <v-row class="px-1">
      <v-col
        v-for="(item, index) in getBookmarks"
        :key="index"
        cols="6"
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
    getBookmarks() {
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
