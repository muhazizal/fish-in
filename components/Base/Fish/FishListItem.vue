<template>
  <div>
    <v-card class="mx-auto mr-4 mb-4" max-width="250">
      <v-img :src="item.img" :lazy-src="item.img" height="200px" />
      <v-card-title class="px-3 pt-3 pb-0 text-subtitle-1">
        {{ item.name }}
      </v-card-title>
      <v-card-subtitle class="ma-0 px-3 py-1" :class="discountedPriceStyle">
        {{ item.price }}/kg
      </v-card-subtitle>
      <v-card-subtitle
        v-if="item.discountedPrice"
        class="ma-0 px-3 pt-0 pb-3 orange--text"
      >
        {{ item.discountedPrice }}/kg
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'FishListItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    discountedPriceStyle() {
      return this.item.discountedPrice
        ? 'text-decoration-line-through grey--text'
        : 'pb-3 orange--text'
    },
  },
}
</script>

<style lang="scss" scoped></style>
