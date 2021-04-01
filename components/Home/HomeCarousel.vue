<template>
  <v-carousel
    continuous
    cycle
    interval="5000"
    hide-delimiter-background
    delimiter-icon="mdi-minus"
    :show-arrows="false"
    height="200"
  >
    <v-carousel-item
      v-for="(item, index) in items"
      :key="index"
      :src="item.src"
    />
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      // TODO: change this src to Promo
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
