<template>
  <div>
    <v-card class="pa-5 mb-5">
      <div class="d-flex align-center justify-space-between mb-2">
        <div>
          <span class="mt-2">{{ item.name }}</span>
        </div>
        <div
          class="rounded px-2 py-2"
          :class="{
            'blue--text text--lighten-1 light-blue lighten-5 ':
              'Ikan Air Laut' == item.jenisIkan,
            'orange--text text--lighten-1 orange lighten-5':
              'Ikan Air Tawar' == item.jenisIkan,
          }"
        >
          <span>{{ item.jenisIkan }}</span>
        </div>
      </div>
      <div class="d-flex align-center justify-space-between mb-2">
        <div>
          <small class="mt-2 text-grey font-weight-light"> Jumlah Ikan </small>
        </div>
        <div>
          <span>{{ item.jumlahIkan }}kg x {{ convertedHargaIkan }}</span>
        </div>
      </div>
      <div class="d-flex align-center justify-space-between mb-2">
        <div>
          <small class="mt-2 text-grey font-weight-light">Ongkir</small>
        </div>
        <div>
          <span>{{ convertedOngkir }}</span>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="d-flex align-center justify-space-between mt-2">
        <div>
          <span class="mt-2">Total Harga</span>
        </div>
        <div>
          <span> {{ convertedTotalHarga }}</span>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { rupiahCurrency } from '@/utils/currency'
export default {
  name: 'FishListItemCart',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    convertedOngkir() {
      return rupiahCurrency(this.item.ongkir, 0, 'Rp.', '.')
    },
    convertedHargaIkan() {
      return rupiahCurrency(this.item.hargaIkan, 0, 'Rp.', '.')
    },
    convertedTotalHarga() {
      const totalHarga =
        this.item.jumlahIkan * this.item.hargaIkan + this.item.ongkir
      return rupiahCurrency(totalHarga, 0, 'Rp.', '.')
    },
  },
}
</script>

<style></style>
