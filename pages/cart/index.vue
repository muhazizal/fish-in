<template>
  <div>
    <search></search>
    <h1>Cart Page</h1>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
  components: {
    Search: () => import('@/components/Base/Search'),
  },
  head() {
    return {
      title: 'Fish-in - Cart',
    }
  },
}
</script>
