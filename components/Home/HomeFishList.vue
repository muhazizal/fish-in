<template>
  <div>
    <fish-list :title="fishTitle" :items="fishList" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HomeFishList',
  components: {
    FishList: () => import('@/components/Base/Fish/FishList'),
  },
  data: () => ({
    fishTitle: 'Produk Terbaru',
  }),
  computed: {
    ...mapGetters({
      fishList: 'fish/getFishList',
    }),
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
