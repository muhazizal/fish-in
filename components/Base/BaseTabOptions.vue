<template>
  <v-col v-if="getOptions" cols="12" class="d-flex justify-center">
    <v-container class="pa-0">
      <!-- TODO: add dynamic class to route v-btn on active class -->
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
      const path = this.$route.fullPath.substr(1)

      // NOTE: if you want to add another link by route, inject here in the next if statement
      if (path === 'message') {
        return [
          {
            name: 'Latest',
            method: async () => await this.handleOnClickLatest(),
          },
          {
            name: 'Completed',
            method: async () => await this.handleOnClickCompleted(),
          },
        ]
      }

      if (path === 'category') {
        return [
          {
            name: 'Proses',
            method: async () => await this.handleOnClickProses(),
          },
          {
            name: 'Selesai',
            method: async () => await this.handleOnClickSelesai(),
          },
        ]
      }

      if (path === 'cart') {
        return [
          {
            name: 'Ikan air Tawar',
            method: async () => await this.handleOnClickTawar(),
          },
          {
            name: 'Ikan Air Laut',
            method: async () => await this.handleOnClickLaut(),
          },
        ]
      }

      return false
    },
  },
  methods: {
    // TODO: add async await function here
    handleOnClickLatest() {
      console.log('latest')
      // await this.$store.dispatch('message/fetchLatest')
    },
    handleOnClickCompleted() {
      console.log('completed')
      // await this.$store.dispatch('message/fetchCompleted')
    },
    handleOnClickProses() {
      console.log('Proses')
      // await this.$store.dispatch('message/fetchCompleted')
    },
    handleOnClickSelesai() {
      console.log('Selesai')
      // await this.$store.dispatch('message/fetchCompleted')
    },
    handleOnClickTawar() {
      console.log('Tawar')
      // await this.$store.dispatch('message/fetchCompleted')
    },
    handleOnClickLaut() {
      console.log('Laut')
      // await this.$store.dispatch('message/fetchCompleted')
    },
  },
}
</script>

<style lang="scss" scoped></style>
