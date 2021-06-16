<template>
  <div>
    <v-row no-gutters class="mb-5">
      <v-col class="d-flex align-start" cols="4">
        <img
          class="img-category"
          lazy-src="https://picsum.photos/id/11/10/6"
          :src="item.img"
        />
      </v-col>
      <v-col cols="7" class="d-flex align-start" style="width: 100%">
        <div>
          <v-card-title
            class="pa-0 text-subtitle-1 d-flex justify-space-between"
          >
            {{ item.nama_produk }}
            <v-icon v-if="showBookmark" color="#5BC695"> mdi-bookmark </v-icon>
          </v-card-title>
          <span
            v-if="!item.harga_diskon"
            :class="discountedPriceStyle"
            class="ml-1"
          >
            {{ convertedPrice }}/kg
          </span>
          <v-card-subtitle
            v-else
            class="ma-0 pa-0 orange--text text-subtitle-2 ml-1"
          >
            {{ convertedDiscountPrice }}/kg
          </v-card-subtitle>
          <v-rating
            v-model="getRating"
            background-color="orange lighten-3"
            color="orange"
            dense
            small
            readonly
          />
        </div>
      </v-col>
      <v-col cols="1" class="d-flex align-center">
        <v-icon color="primary" @click="handleShowDialogProduct">
          mdi-plus-circle-outline
        </v-icon>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { rupiahCurrency } from '@/utils/currency'
export default {
  name: 'FishListItemCategory',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      showBookmark: true,
    }
  },
  computed: {
    convertedPrice() {
      const harga = this.item.harga + this.item.harga_toko
      return rupiahCurrency(harga, 0, 'Rp.', '.')
    },
    convertedDiscountPrice() {
      return rupiahCurrency(this.item.harga_diskon, 0, 'Rp.', '.')
    },
    discountedPriceStyle() {
      return this.item.harga_diskon
        ? 'text-decoration-line-through grey--text text-subtitle-2'
        : 'text-subtitle-2'
    },
    getRating() {
      return 4
    },
  },
  methods: {
    handleShowDialogProduct() {
      console.log('dialog')
    },
  },
}
</script>

<style lang="scss" scoped>
.img-category {
  width: 100px;
  height: 75px;
  border-radius: 5px;
}
</style>
