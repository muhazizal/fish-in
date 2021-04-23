<template>
  <div>
    <v-row no-gutters class="mb-2">
      <v-col class="" cols="4">
        <img
          class="img-category"
          lazy-src="https://picsum.photos/id/11/10/6"
          src="https://picsum.photos/id/11/500/300"
        />
      </v-col>
      <v-col class="d-flex flex-column align-self-center" cols="4">
        <h5 class="">{{ item.name }}</h5>
        <h5 class="orange--text text--lighten-1 my-1">
          {{ convertedHargaIkan }}/kg
        </h5>
      </v-col>
      <v-col class="d-flex flex-column items-center" cols="4">
        <div
          class="rounded text-center"
          :class="{
            'blue--text text--lighten-1 light-blue lighten-5 ':
              'Ikan Air Laut' == item.jenisIkan,
            'orange--text text--lighten-1 orange lighten-5':
              'Ikan Air Tawar' == item.jenisIkan,
          }"
        >
          <small>{{ item.jenisIkan }}</small>
        </div></v-col
      >
    </v-row>
    <v-divider></v-divider>
    <fish-total-harga :price="price" />
    <v-divider></v-divider>
    <div class="my-3">
      <div class="d-flex flex-column">
        <small class="mt-2 text-grey font-weight-light mb-1"
          >Alamat Pengiriman</small
        >
        <small>{{ item.alamat }}</small>
        <small class="mt-2 text-grey font-weight-light mb-1"
          >No Telp Penerima</small
        >
        <small>{{ item.telepon }}</small>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="my-3">
      <div class="d-flex flex-column">
        <small class="mt-2 text-grey font-weight-light mb-1"
          >Status Pemesanan</small
        >
        <small>{{ item.status }}</small>
      </div>
      <button-finish title="Finish" />
    </div>
  </div>
</template>

<script>
import { rupiahCurrency } from '@/utils/currency'

export default {
  name: 'FishDetailPesanan',
  components: {
    ButtonFinish: () => import('~/components/Base/ButtonFinish'),
    FishTotalHarga: () => import('~/components/Base/Fish/FishTotalHarga'),
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    price() {
      return {
        hargaIkan: this.item.hargaIkan,
        ongkir: this.item.ongkir,
        jumlahIkan: this.item.jumlahIkan,
      }
    },
    convertedHargaIkan() {
      return rupiahCurrency(this.item.hargaIkan, 0, 'Rp.', '.')
    },
    convertedOngkir() {
      return rupiahCurrency(this.item.ongkir, 0, 'Rp.', '.')
    },
    convertedTotalHarga() {
      const totalHarga =
        this.item.jumlahIkan * this.item.hargaIkan + this.item.ongkir
      return rupiahCurrency(totalHarga, 0, 'Rp.', '.')
    },
  },
}
</script>

<style lang="scss" scoped>
.img-category {
  width: 90px;
  height: 70px;
  border-radius: 5px;
}
</style>
