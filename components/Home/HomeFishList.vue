<template>
  <div>
    <fish-list :title="fishTitle" :items="latestProduct" />
  </div>
</template>
<script>
export default {
  name: 'HomeFishList',
  components: {
    FishList: () => import('@/components/Base/Fish/FishList'),
  },
  data: () => ({
    fishTitle: 'Produk Terbaru',
  }),
  computed: {
    latestProduct() {
      return this.$store.getters['fish/getFishList']
    },
  },
  async created() {
    await this.handleGetFishList()
  },
  methods: {
    async handleGetFishList() {
      await this.$store.dispatch('fish/fishList')
    },
  },
}
</script>
<style lang="scss" scoped></style>
