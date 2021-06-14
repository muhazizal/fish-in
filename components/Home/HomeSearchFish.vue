<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-subtitle-1 font-weight-medium">
            Cari Ikan Berdasarkan Budget
          </h2>
        </v-col>
        <v-col cols="6" class="pt-0">
          <v-text-field
            v-model="price"
            type="number"
            label="Harga"
            class="pt-0"
            prefix="Rp."
            color="primary"
            clearable
            hide-details
            single-line
          />
        </v-col>
        <v-col cols="6" class="pt-0">
          <v-text-field
            v-model="quantity"
            type="number"
            label="Jumlah"
            class="pt-0"
            prepend-inner-icon="mdi-cart-plus"
            hide-details
            single-line
            clearable
          />
        </v-col>
        <v-col cols="12" class="pt-0 mb-3">
          <v-select
            v-model="category"
            :items="categoryOptions"
            menu-props="auto"
            label="Kategori"
            class="pt-0"
            prepend-inner-icon="mdi-fish"
            clearable
            hide-details
            single-line
          />
        </v-col>
        <v-col cols="12" class="pt-0">
          <v-btn
            color="#5BC695"
            depressed
            width="100%"
            class="white--text"
            @click="handleSearchFish"
          >
            Cari Ikan
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'HomeSearchFish',
  data: () => ({
    valid: false,
    price: null,
    quantity: null,
    category: null,
    categoryOptions: ['Air Tawar', 'Air Laut'],
  }),
  methods: {
    handleConvertCategory() {
      if (this.category) {
        this.category = this.category.toLowerCase().split(' ').join('_')
      }
    },
    handleSearchFish() {
      this.handleConvertCategory()
      return this.$router.push(
        `/kategori?harga=${this.price}&kuantitas=${this.quantity}&jenis=${this.category}`
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.v-form {
  margin: 16px 0;
  border: 1px solid rgba($color: grey, $alpha: 0.2);
  box-shadow: 0px 0px 5px 1px rgb(234, 234, 234);
  border-radius: 5px;
}
</style>
