<template>
  <div>
    <home-carousel />
    <home-search-fish />
  </div>
</template>

<script>
export default {
  name: 'BerandaPage',
  components: {
    HomeCarousel: () => import('@/components/Home/HomeCarousel'),
    HomeSearchFish: () => import('@/components/Home/HomeSearchFish'),
  },
  head() {
    return {
      title: 'Beranda',
    }
  },
}
</script>
