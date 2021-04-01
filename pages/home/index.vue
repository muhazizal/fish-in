<template>
  <div>
    <home-carousel />
  </div>
</template>

<script>
export default {
  name: 'BerandaPage',
  components: {
    HomeCarousel: () => import('@/components/Home/HomeCarousel'),
  },
  head() {
    return {
      title: 'Beranda',
    }
  },
}
</script>
