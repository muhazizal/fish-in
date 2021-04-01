<template>
  <v-container>
    <v-row class="category">
      <v-col cols="12 pb-0">
        <h2 class="text-subtitle-1 font-weight-medium">Fish Category</h2>
      </v-col>
      <v-col cols="6">
        <v-btn color="primary" large width="100%" to="/fresh-fish">
          Fresh Water
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn color="primary" large width="100%" to="/seafood">
          Sea Water
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeCategoryFish',
}
</script>

<style lang="scss" scoped>
.category {
  box-shadow: 0px 0px 8px 2px rgb(219, 219, 219);
  border-radius: 5px;
  height: 100%;
}
</style>
