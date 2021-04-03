<template>
  <div>
    <search></search>
    <v-card class="pa-5 mb-5" v-for="item in items" :key="item.id">
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
          <span>{{ item.jumlahIkan }}kg x Rp {{ item.hargaIkan }}</span>
        </div>
      </div>
      <div class="d-flex align-center justify-space-between mb-2">
        <div>
          <small class="mt-2 text-grey font-weight-light">Ongkir</small>
        </div>
        <div>
          <span>{{ item.ongkir }}</span>
        </div>
      </div>
      <v-divider></v-divider>
      <div class="d-flex align-center justify-space-between mt-2">
        <div>
          <span class="mt-2">Total Harga</span>
        </div>
        <div>
          <span>Rp {{ item.jumlahIkan * item.hargaIkan + item.ongkir }}</span>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
  components: {
    Search: () => import('@/components/Base/Search'),
  },

  data: () => ({
    items: [
      {
        id: 1,
        name: 'Ikan Bawal',
        jenisIkan: 'Ikan Air Tawar',
        jumlahIkan: 5,
        hargaIkan: 50000,
        ongkir: 15000,
      },
      {
        id: 2,
        name: 'Ikan Lele',
        jenisIkan: 'Ikan Air Tawar',
        jumlahIkan: 2,
        hargaIkan: 20000,
        ongkir: 15000,
      },
      {
        id: 3,
        name: 'Ikan Mujair',
        jenisIkan: 'Ikan Air Laut',
        jumlahIkan: 4,
        hargaIkan: 30000,
        ongkir: 15000,
      },
      {
        id: 4,
        name: 'Kepiting',
        jenisIkan: 'Ikan Air Laut',
        jumlahIkan: 10,
        hargaIkan: 10000,
        ongkir: 15000,
      },
    ],
  }),

  head() {
    return {
      title: 'Fish-in - Cart',
    }
  },
}
</script>
