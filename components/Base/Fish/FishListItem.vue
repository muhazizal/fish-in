<template>
  <div>
    <v-card class="mx-auto" :class="getMarginClass" max-width="250">
      <v-img :src="item.img" :lazy-src="item.img" height="150" />
      <v-card-title
        class="px-3 pt-3 pb-0 text-subtitle-1 d-flex justify-space-between"
      >
        {{ item.nama_produk }}
        <v-icon
          :color="getBookmarkColor"
          @click="handleBookmarkFish(item.id_penyimpanan)"
        >
          mdi-bookmark
        </v-icon>
      </v-card-title>
      <v-card-subtitle class="ma-0 px-3 py-1 d-flex justify-space-between">
        <span :class="discountedPriceStyle">{{ convertedPrice }}/kg</span>
        <v-rating
          v-model="getRating"
          background-color="orange lighten-3"
          color="orange"
          dense
          small
          readonly
        />
      </v-card-subtitle>
      <v-card-subtitle
        v-if="item.harga_diskon"
        class="ma-0 px-3 py-1 orange--text"
      >
        {{ convertedDiscountPrice }}/kg
      </v-card-subtitle>
      <v-card-subtitle class="ma-0 px-3 py-1">
        Stok: {{ item.stok }}
      </v-card-subtitle>
      <v-card-subtitle class="ma-0 px-3 py-1 pb-3">
        Penjual: {{ item.nama_penjual }}
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
    hideMargin: {
      type: Boolean,
      default: false,
    },
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
        ? 'text-decoration-line-through grey--text'
        : ''
    },
    getMarginClass() {
      return this.hideMargin ? '' : 'mr-4 mb-4'
    },
    getBookmarkColor() {
      if (this.item && this.item.status) {
        return '#5BC695'
      }
      return 'grey lighten-1'
    },
    getRating() {
      return 4
    },
  },
  methods: {
    async handleBookmarkFish(id) {
      try {
        const userToken = this.$cookies.get('auth_token')
        let response
        if (!status) {
          response = await this.$axios.post(
            '/api/bookmark',
            {
              id,
            },
            {
              headers: {
                authorization: userToken,
              },
            }
          )
        } else {
          response = await this.$axios.put(
            '/api/bookmark',
            {
              id,
              status: false,
            },
            {
              headers: {
                authorization: userToken,
              },
            }
          )
        }
        console.log('Response bookmarkFish: ', response)
        if (response) {
          await this.dispatch('fish/fishList')
        }
      } catch (error) {
        console.log('Error bookmarkFish: ', error)
      }
    },
  },
}
</script>
<style lang="scss" scoped></style>
