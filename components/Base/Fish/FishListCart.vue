<template>
  <div>
    <fish-list-item-cart v-for="item in items" :key="item.id" :item="item" />
    <v-divider></v-divider>
    <div class="d-flex align-center justify-space-between my-2">
      <div>
        <span class="mt-2 text-grey font-weight-light">Ongkir</span>
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
        <span>{{ convertedTotalHarga }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { rupiahCurrency } from '@/utils/currency'

export default {
  name: 'FishListCart',
  components: {
    FishListItemCart: () => import('@/components/Base/Fish/FishListItemCart'),
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    convertedOngkir() {
      return rupiahCurrency(this.items[0].ongkir, 0, 'Rp.', '.')
    },
    convertedTotalHarga() {
      let sum = 0
      for (let i = 0; i < this.items.length; i++) {
        sum = sum + this.items[i].hargaIkan
      }
      const totalHarga = sum + this.items[0].ongkir

      return rupiahCurrency(totalHarga, 0, 'Rp.', '.')
    },
  },
}
</script>

<style></style>
