<template>
  <div>
    <home-carousel />
    <home-search-fish />
    <home-category-fish />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {
    HomeCarousel: () => import('@/components/Home/HomeCarousel'),
    HomeSearchFish: () => import('@/components/Home/HomeSearchFish'),
    HomeCategoryFish: () => import('@/components/Home/HomeCategoryFish'),
  },
  head() {
    return {
      title: 'HomePage',
    }
  },
}
</script>
