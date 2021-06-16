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
    <div class="my-3">
      <div class="d-flex align-center justify-space-between mb-2">
        <div>
          <small class="mt-2 text-grey font-weight-light"> Harga Ikan </small>
        </div>
        <div>
          <small> {{ convertedHargaIkan }}</small>
        </div>
      </div>
    </div>
    <v-divider></v-divider>

    <v-divider></v-divider>
    <div>
      <v-textarea
        solo
        class="mt-3"
        label="Berikan komentarmu"
        hide-details="auto"
      ></v-textarea>
    </div>
    <v-select class="mt-3" :items="items" label="Bintang" required></v-select>
    <div class="my-3">
      <button-finish title="Submit" />
    </div>
  </div>
</template>

<script>
import { rupiahCurrency } from '@/utils/currency'

export default {
  name: 'FishDetailPesanan',
  components: {
    ButtonFinish: () => import('~/components/Base/ButtonFinish'),
  },
  data: () => ({
    items: ['Bintang 1', 'Bintang 2', 'Bintang 3', 'Bintang 4', 'Bintang 5'],
  }),
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
    convertedHargaIkan() {
      console.log(this.item)
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

<style lang="scss" scoped>
.img-category {
  width: 90px;
  height: 70px;
  border-radius: 5px;
}
</style>
