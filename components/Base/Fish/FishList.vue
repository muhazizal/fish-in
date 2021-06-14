<template>
  <v-container class="mt-4 pa-0">
    <div class="d-flex justify-space-between align-center mb-3">
      <h2 class="text-subtitle-1 font-weight-medium">{{ title }}</h2>
      <v-btn to="/" text class="pa-3 grey--text">
        <span>Lihat Semua</span>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
    <div class="d-flex overflow-x-auto">
      <fish-list-item
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </div>
  </v-container>
</template>
<script>
export default {
  name: 'FishList',
  components: {
    FishListItem: () => import('@/components/Base/Fish/FishListItem'),
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
