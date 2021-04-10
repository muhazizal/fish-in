<template>
  <v-container class="pa-0">
    <h1>Obrolan Detail</h1>
  </v-container>
</template>

<script>
export default {
  name: 'MessageDetailPage',
  head() {
    return {
      title: 'Obrolan Detail',
      meta: [
        {
          hid: 'obrolan detail',
          name: 'obrolan detail',
          content: 'Halaman obrolan detail Fish-In',
        },
      ],
    }
  },
  created() {
    console.log(this.$route)
  },
}
</script>
