<template>
  <v-col v-if="getOptions" cols="12" class="d-flex justify-center">
    <v-container class="pa-0">
      <v-btn
        v-for="(option, index) in getOptions"
        :key="index"
        width="50%"
        depressed
        tile
        @click="option.method"
      >
        {{ option.name }}
      </v-btn>
    </v-container>
  </v-col>
</template>

<script>
export default {
  name: 'FishTabOptions',
  computed: {
    getOptions() {
      const routeName = this.$route.name

      // NOTE: if you want to add another link by route, inject here in the next if statement
      if (routeName === 'obrolan') {
        return [
          {
            name: 'Terbaru',
            method: async () => await this.handleOnClickLatest(),
          },
          {
            name: 'Sudah Terbaca',
            method: async () => await this.handleOnClickCompleted(),
          },
        ]
      }
      if (routeName === 'kategori') {
        return [
          {
            name: 'Air Tawar',
            method: () =>
              this.handleRedirectTab('kategori', 'jenis', 'air_tawar'),
          },
          {
            name: 'Air Laut',
            method: () =>
              this.handleRedirectTab('kategori', 'jenis', 'air_laut'),
          },
        ]
      }
      if (routeName === 'pesanan') {
        return [
          {
            name: 'Proses',
            method: async () => await this.handleOnClickTawar(),
          },
          {
            name: 'Selesai',
            method: async () => await this.handleOnClickLaut(),
          },
        ]
      }
      return false
    },
  },
  methods: {
    handleRedirectTab(name, query, value) {
      return this.$router.push(`/${name}?${query}=${value}`)
    },
  },
}
</script>

<style lang="scss" scoped></style>
