<template>
  <v-container class="pb-6">
    <v-row class="category">
      <v-col cols="12 pb-0">
        <h2 class="text-subtitle-1 font-weight-medium">Fish Category</h2>
      </v-col>
      <v-col cols="6">
        <v-btn
          color="primary"
          large
          width="100%"
          :to="getRouteCategory('ikan-tawar')"
        >
          Fresh Water
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn
          color="primary"
          large
          width="100%"
          :to="getRouteCategory('ikan-laut')"
        >
          Sea Water
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeFishCategory',
  methods: {
    getRouteCategory(filter) {
      return `/category?filter=${filter}`
    },
  },
}
</script>

<style lang="scss" scoped>
.category {
  border: 1px solid rgba($color: grey, $alpha: 0.2);
  box-shadow: 0px 0px 5px 1px rgb(234, 234, 234);
  border-radius: 5px;
}
</style>
