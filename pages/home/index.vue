<template>
  <div>
    <home-carousel />
    <home-search-fish />
    <home-category-fish />
    <home-fish-list />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {
    HomeCarousel: () => import('@/components/Home/HomeCarousel'),
    HomeSearchFish: () => import('@/components/Home/HomeSearchFish'),
    HomeCategoryFish: () => import('@/components/Home/HomeCategoryFish'),
    HomeFishList: () => import('@/components/Home/HomeFishList'),
  },
  head() {
    return {
      title: 'HomePage',
    }
  },
}
</script>
