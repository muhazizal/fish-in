<template>
  <div>
    <v-form>
      <v-text-field
        v-model="search"
        :label="label"
        solo
        prepend-inner-icon="mdi-magnify"
        clearable
        hide-details
        single-line
        @keydown.enter="(event) => handleSearchFish(event)"
      />
    </v-form>
  </div>
</template>
<script>
export default {
  name: 'BaseSearch',
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    search: '',
  }),
  methods: {
    handleSearchFish(event) {
      event.preventDefault()
      if (this.search) {
        return this.$router.push(
          `/kategori?nama_produk=${this.search
            .toLowerCase()
            .split(' ')
            .join('_')}`
        )
      }
      return this.$router.push('/kategori')
    },
  },
}
</script>
<style lang="sass" scoped></style>
