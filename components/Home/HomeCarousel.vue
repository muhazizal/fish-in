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
      eager
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
          src: require('~/assets/images/promo-1.jpg'),
        },
        {
          src: require('~/assets/images/promo-2.png'),
        },
        {
          src: require('~/assets/images/promo-3.png'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.v-carousel {
  border-radius: 5px;
}
</style>
