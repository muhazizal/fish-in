<template>
  <div>
    <fish-list-category :items="items" is-edit />
    <v-container class="text-center px-0">
      <v-btn large color="primary" width="100%" @click="handleCheckoutCart">
        Checkout Pesanan
      </v-btn>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'CartPage',
  components: {
    FishListCategory: () => import('@/components/Base/Fish/FishListCategory'),
  },
  data() {
    return {
      userToken: '',
      items: [
        {
          harga: 25000,
          harga_diskon: 0,
          harga_toko: 5000,
          id_penyimpanan: '0',
          img:
            'https://img.okezone.com/content/2020/08/31/298/2270316/5-manfaat-ikan-lele-yang-wajib-kamu-ketahui-baik-untuk-kesehatan-kulit-KdhWRw1VWl.jpg',
          jenis: 'air_tawar',
          nama_penjual: 'Toko Ikhlas',
          nama_produk: 'Ikan Lele',
          stok: 100,
        },
      ],
    }
  },
  head() {
    return {
      title: 'Cart',
      meta: [
        {
          hid: 'cart',
          name: 'cart',
          content: 'Halaman Cart Fish-In',
        },
      ],
    }
  },
  async created() {
    this.userToken = this.$cookies.get('auth_token')
    await this.handleGetCart()
  },
  methods: {
    async handleGetCart() {
      try {
        const response = await this.$axios.get('/api/cart', {
          headers: {
            authorization: this.userToken,
          },
        })
        console.log('Response getCart: ', response)
        if (response) {
          // this.items = response.data
        }
      } catch (error) {
        console.log('Error getCart: ', error)
      }
    },
    async handleCheckoutCart() {
      try {
        const response = await this.$axios.post()
        console.log(response)
      } catch (error) {
        console.log('Error checkoutCart:', error)
      }
    },
  },
}
</script>
