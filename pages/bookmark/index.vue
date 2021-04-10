<template>
  <v-container class="pa-0">
    <h2>Bookmark</h2>
  </v-container>
</template>
<script>
export default {
  name: 'BookmarkPage',
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
}
</script>
