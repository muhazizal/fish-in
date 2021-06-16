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
      <v-col cols="4" class="d-flex align-start" style="width: 100%">
        <div>
          <v-card-title
            class="pa-0 text-subtitle-1 d-flex justify-space-between"
          >
            {{ item.nama_produk }}
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
      <v-col cols="4" class="d-flex justify-end align-center">
        <v-icon
          v-show="isEdit"
          color="red lighten-2"
          :disabled="inputQuantity < 1"
          @click="handleMinusItem"
        >
          mdi-minus-circle-outline
        </v-icon>
        <v-text-field
          v-show="isEdit"
          v-model="inputQuantity"
          type="number"
          width="10px"
          readonly
          style="max-width: 10px; margin: 0 12px"
        ></v-text-field>
        <v-icon color="primary" @click="handleAddItem">
          mdi-plus-circle-outline
        </v-icon>
        <v-icon
          v-show="isEdit"
          color="red"
          class="ml-3"
          @click="handleDeleteItem"
        >
          mdi-delete-outline
        </v-icon>
      </v-col>
    </v-row>
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
  name: 'FishListItemCategory',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputQuantity: 0,
      userToken: '',
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
        ? 'text-decoration-line-through grey--text text-subtitle-2'
        : 'text-subtitle-2'
    },
    getRating() {
      return this.item.bintang
    },
  },
  created() {
    this.userToken = this.$cookies.get('auth_token')
  },
  mounted() {
    // this.inputQuantity = this.item.quantity
  },
  methods: {
    handleMinusItem() {
      if (this.inputQuantity > 0) {
        this.inputQuantity--
      }
    },
    async handleAddItem() {
      if (this.isEdit) {
        this.inputQuantity++
      } else {
        try {
          const response = await this.$axios.post(
            '/api/cart',
            {
              id: this.item.id_penyimpanan,
            },
            {
              headers: {
                authorization: this.userToken,
              },
            }
          )
          console.log('Response addItem:', response)
          if (response) {
            this.showAlertSuccess = true
          }
        } catch (error) {
          console.log('Error addProduct: ', error)
          this.showAlertFailed = true
        }
      }
    },
    async handleDeleteItem() {
      try {
        const response = await this.$axios.delete(
          '/api/cart',
          {
            id: this.item.id_penyimpanan,
          },
          {
            headers: {
              authorization: this.userToken,
            },
          }
        )
        console.log('Response deleteItem:', response)
        if (response) {
          this.showAlertSuccess = true
        }
      } catch (error) {
        this.showAlertFailed = true
        console.log('Error deleteItem:', error)
      }
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
