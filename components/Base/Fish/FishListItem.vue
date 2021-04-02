<template>
  <div>
    <v-card class="mx-auto mr-4 mb-4" max-width="250">
      <v-img :src="item.img" :lazy-src="item.img" height="200px" />
      <v-card-title class="px-3 pt-3 pb-0 text-subtitle-1">
        {{ item.name }}
      </v-card-title>
      <v-card-subtitle class="ma-0 px-3 py-1" :class="discountedPriceStyle">
        {{ convertedPrice }}/kg
      </v-card-subtitle>
      <v-card-subtitle
        v-if="item.discountedPrice"
        class="ma-0 px-3 pt-0 pb-3 orange--text"
      >
        {{ convertedDiscountPrice }}/kg
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
import { rupiahCurrency } from '@/utils/currency'

export default {
  name: 'FishListItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    convertedPrice() {
      return rupiahCurrency(this.item.price, 0, 'Rp.', '.')
    },
    convertedDiscountPrice() {
      return rupiahCurrency(this.item.discountedPrice, 0, 'Rp.', '.')
    },
    discountedPriceStyle() {
      return this.item.discountedPrice
        ? 'text-decoration-line-through grey--text'
        : 'pb-3'
    },
  },
}
</script>

<style lang="scss" scoped></style>
