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

    <v-divider></v-divider>
    <div class="mx-auto">
      <v-col cols="12" md="6">
        <v-textarea
          solo
          name="input-7-4"
          label="Berikan komentarmu"
        ></v-textarea>
      </v-col>
      <div class="text-center m-0">
        <v-rating
          v-model="rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          hover
          large
        ></v-rating>
      </div>

      <v-divider></v-divider>
      <v-card-actions class="justify-space-between">
        <v-btn text> No Thanks </v-btn>
        <v-btn color="primary" text> Rate Now </v-btn>
      </v-card-actions>
    </div>
  </div>
</template>

<script>
import { rupiahCurrency } from '@/utils/currency'

export default {
  name: 'FishDetailPesanan',
  components: {},
  data: () => ({
    rating: 4.5,
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
