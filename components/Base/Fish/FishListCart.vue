<template>
  <div>
    <fish-list-item-cart v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
export default {
  name: 'FishListCart',
  components: {
    FishListItemCart: () => import('@/components/Base/Fish/FishListItemCart'),
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
