<template>
  <v-col v-if="getRoutes" cols="12" class="d-flex justify-center">
    <v-container class="pa-0">
      <!-- TODO: add dynamic class to route v-btn -->
      <v-btn
        v-for="(route, index) in getRoutes"
        :key="index"
        :to="route.link"
        width="50%"
        depressed
        tile
      >
        {{ route.name }}
      </v-btn>
    </v-container>
  </v-col>
</template>

<script>
export default {
  name: 'FishTabOptions',
  computed: {
    getRoutes() {
      const path = this.$route.fullPath.substr(1)

      // NOTE: if you want to add another link by route, inject here in the next if statement
      if (path === 'message') {
        return [
          {
            name: 'Latest',
            link: '/message/latest',
          },
          {
            name: 'Completed',
            link: '/message/completed',
          },
        ]
      }

      return false
    },
  },
}
</script>

<style lang="scss" scoped></style>
