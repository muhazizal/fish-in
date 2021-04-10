<template>
  <v-row justify="start">
    <v-container class="d-flex align-center">
      <div class="mr-auto d-flex align-center">
        <span class="text-subtitle-1 mr-4"> Tentang Fish-In </span>
      </div>
      <v-btn text depressed plain small @click="goToAboutUs()">
        <v-icon color="grey">mdi-chevron-right</v-icon>
      </v-btn>
    </v-container>
  </v-row>
</template>

<script>
export default {
  name: 'DialogAboutUs',
  methods: {
    goToAboutUs() {
      this.$router.push('/tentang-kami')
    },
  },
}
</script>
