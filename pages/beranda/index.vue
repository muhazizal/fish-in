<template>
  <div>
    <home-carousel />
    <home-search-fish />
    <home-fish-category />
    <home-fish-list />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {
    HomeCarousel: () => import('@/components/Home/HomeCarousel'),
    HomeSearchFish: () => import('@/components/Home/HomeSearchFish'),
    HomeFishCategory: () => import('@/components/Home/HomeFishCategory'),
    HomeFishList: () => import('@/components/Home/HomeFishList'),
  },
  head() {
    return {
      title: 'Beranda',
      meta: [
        {
          hid: 'beranda',
          name: 'beranda',
          content: 'Halaman beranda Fish-In',
        },
      ],
    }
  },
}
</script>
