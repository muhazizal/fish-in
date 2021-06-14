<template>
  <div>
    <v-row no-gutters class="mb-5">
      <v-col class="d-flex align-end" cols="4">
        <img
          class="img-category"
          lazy-src="https://picsum.photos/id/11/10/6"
          :src="item.img"
        />
      </v-col>
      <v-col cols="7" class="d-flex align-start">
        <div>
          <h4 class="text-subtitle-1 font-weight-medium">
            {{ item.nama_produk }}
          </h4>
          <!-- <v-icon
            v-for="n in 5"
            :key="n.id"
            small
            :class="{
              'orange--text text--lighten-1': n <= item.rating,
              'grey--text text--lighten-1': n > item.rating,
            }"
            >mdi-star</v-icon
          >
          <small class="text-caption grey--text">
            ({{ item.review }}
            review)
          </small> -->
          <h5 class="font-weight-regular grey--text text--darken-1">
            {{ convertedHargaKg }}/kg
          </h5>
        </div>
      </v-col>
      <v-col cols="1" class="d-flex align-center">
        <v-icon color="primary" @click="handleShowDialogProduct"
          >mdi-plus-circle-outline</v-icon
        >
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
  computed: {
    convertedHargaKg() {
      return rupiahCurrency(this.item.harga, 0, 'Rp.', '.')
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
