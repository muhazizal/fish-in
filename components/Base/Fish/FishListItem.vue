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
    <v-snackbar
      v-model="showAlertSuccess"
      bottom
      color="success"
      timeout="3000"
      class="font-weight-bold"
    >
      Success
    </v-snackbar>
    <v-snackbar
      v-model="showAlertFailed"
      bottom
      color="error"
      timeout="3000"
      class="font-weight-bold"
    >
      Failed
    </v-snackbar>
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
  data() {
    return {
      showAlertSuccess: false,
      showAlertFailed: false,
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
      return this.item.bintang
    },
  },
  methods: {
    async getBookmark() {
      try {
        const userToken = this.$cookies.get('auth_token')
        const response = await this.$axios.get('/api/bookmark', {
          headers: {
            authorization: userToken,
          },
        })
        console.log('Response getBookmark: ', response)
        if (response) {
          this.bookmark = response.data.data
        }
      } catch (error) {
        console.log('Error getBookmark: ', error)
      }
    },
    async handleBookmarkFish(id) {
      try {
        const userToken = this.$cookies.get('auth_token')
        const response = await this.$axios.post(
          '/api/bookmark',
          {
            id,
            status_bookmark: !this.item.status,
          },
          {
            headers: {
              authorization: userToken,
            },
          }
        )
        console.log('Response bookmarkFish: ', response)
        if (response) {
          this.showAlertSuccess = true
          const { name } = this.$route
          if (name === 'bookmark') {
            this.$emit('handle-get-bookmark')
          } else {
            await this.$store.dispatch('fish/fishList')
          }
        }
      } catch (error) {
        this.showAlertFailed = true
        console.log('Error bookmarkFish: ', error)
      }
    },
  },
}
</script>
<style lang="scss" scoped></style>
