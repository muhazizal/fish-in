<template>
  <v-row justify="start">
    <v-container class="d-flex align-center">
      <div class="mr-auto d-flex align-center">
        <span class="text-subtitle-1 mr-4"> FAQ </span>
      </div>
      <v-btn text depressed plain small @click="goToFaq()">
        <v-icon color="grey">mdi-chevron-right</v-icon>
      </v-btn>
    </v-container>
  </v-row>
</template>

<script>
export default {
  name: 'DialogFaq',
  data: () => ({
    dialog: false,
  }),
  methods: {
    goToFaq() {
      return this.$router.push('/faq')
    },
  },
}
</script>
