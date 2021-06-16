<template>
  <div>
    <fish-list-item-category
      v-for="item in items"
      :key="item.id"
      :item="item"
      :is-edit="isEdit"
    />
  </div>
</template>

<script>
export default {
  name: 'FishListCategory',
  components: {
    FishListItemCategory: () =>
      import('@/components/Base/Fish/FishListItemCategory'),
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
