<template>
  <div class="my-3">
    <div class="d-flex align-center justify-space-between mb-2">
      <div>
        <small class="mt-2 text-grey font-weight-light"> Jumlah Ikan </small>
      </div>
      <div>
        <small>{{ price.jumlahIkan }}kg x {{ convertedHargaIkan }}</small>
      </div>
    </div>
    <div class="d-flex align-center justify-space-between mb-2">
      <div>
        <small class="mt-2 text-grey font-weight-light">Ongkir</small>
      </div>
      <div>
        <small>{{ convertedOngkir }}</small>
      </div>
    </div>

    <div class="d-flex align-center justify-space-between mt-2">
      <div>
        <small class="mt-2">Total Harga</small>
      </div>
      <div>
        <small> {{ convertedTotalHarga }}</small>
      </div>
    </div>
  </div>
</template>

<script>
import { rupiahCurrency } from '@/utils/currency'

export default {
  name: 'FishTotalHarga',
  props: {
    price: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    convertedHargaIkan() {
      console.log(this.price)
      return rupiahCurrency(this.price.hargaIkan, 0, 'Rp.', '.')
    },
    convertedOngkir() {
      console.log(this.price.ongkir)
      return rupiahCurrency(this.price.ongkir, 0, 'Rp.', '.')
    },
    convertedTotalHarga() {
      console.log(this.price.hargaIkan)
      const totalHarga =
        this.price.jumlahIkan * this.price.hargaIkan + this.price.ongkir
      return rupiahCurrency(totalHarga, 0, 'Rp.', '.')
    },
  },
}
</script>

<style></style>
