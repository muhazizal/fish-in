<template>
  <div>
    <v-row v-for="item in items" :key="item.id" no-gutters class="mb-5">
      <v-col class="d-flex align-end" cols="4">
        <img
          class="img-category"
          lazy-src="https://picsum.photos/id/11/10/6"
          src="https://picsum.photos/id/11/500/300"
        />
      </v-col>
      <v-col cols="7" class="d-flex align-end">
        <div>
          <h4 class="text-subtitle-1 font-weight-medium">{{ item.nama }}</h4>
          <v-icon
            small
            v-for="n in 5"
            :key="n.id"
            :class="{
              'orange--text text--lighten-1': n <= item.rating,
              'grey--text text--lighten-1': n > item.rating,
            }"
            >mdi-star</v-icon
          >
          <small class="text-caption grey--text">
            ({{ item.review }}
            review)
          </small>
          <h5 class="font-weight-regular orange--text text--lighten-1">
            Rp {{ item.harga_kg }}/kg atau Rp {{ item.harga_ons }}/ons
          </h5>
        </div>
      </v-col>
      <v-col cols="1" class="d-flex align-center">
        <v-icon color="grey">mdi-chevron-right</v-icon>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'CategoryPage',
  data: () => ({
    items: [
      {
        id: 1,
        nama: 'Ikan Lele',
        rating: 4,
        review: 20,
        harga_kg: 50000,
        harga_ons: 1250,
      },
      {
        id: 2,
        nama: 'Ikan Tongkol',
        rating: 2,
        review: 15,
        harga_kg: 10000,
        harga_ons: 2250,
      },
      {
        id: 3,
        nama: 'Kepiting',
        rating: 5,
        review: 10,
        harga_kg: 110000,
        harga_ons: 5250,
      },
    ],
  }),
  head() {
    return {
      title: 'Category',
    }
  },
}
</script>

<style lang="sass" scoped>
.img-category
  width : 110px,
  height : 100px,
  border-radius : 5px,
</style>
