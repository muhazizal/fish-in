<template>
  <v-row>
    <h2
      class="ml-4 text-subtitle-1 grey--text text--lighten-1 font-weight-medium"
    >
      Bookmark
    </h2>
    <v-container class="ma-4 mt-1">
      <dialog-bookmark />
    </v-container>
  </v-row>
</template>

<script>
export default {
  name: 'ProfileBookmark',
  components: {
    DialogBookmark: () => import('./Dialog/DialogBookmark'),
  },
}
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid rgba($color: grey, $alpha: 0.2);
  box-shadow: 0px 0px 5px 1px rgb(234, 234, 234);
  border-radius: 5px;
}
</style>
