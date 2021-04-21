<template>
  <div>
    <v-card elevation="2" outlined>
      <div class="d-flex justify-space-between">
        <v-col class="d-flex p-0" cols="12">
          <v-select :items="itemss" label="Transfer" dense></v-select>
        </v-col>
        <!-- <v-card-title class="text-body-1 text--secondary"
          >Transfer
        </v-card-title>
        <v-icon class="mr-3" @click="dropdownTransfer" outline
          >mdi-arrow-down-drop-circle-outline</v-icon
        > -->
      </div>
      <!-- <v-card-title
        v-for="(item, index) in items"
        :key="index + item"
        :class="showTransfer ? 'd-none' : 'd-block'"
      >
        <span class="mx-2 text-body-1 text--secondary">{{ item.title }}</span>
      </v-card-title> -->
      <div class="d-flex justify-space-between">
        <v-col class="d-flex" cols="12">
          <v-select :items="itemss" label="Bayar di Tempat" dense></v-select>
        </v-col>
        <!-- <v-card-title class="text-body-1 text--secondary"
          >Bayar di tempat</v-card-title
        >
        <v-icon class="mr-3" @click="dropdownBayar"
          >mdi-arrow-down-drop-circle-outline</v-icon
        > -->
      </div>
      <!-- <v-card-title
        v-for="(item, index) in items"
        :key="index"
        :class="showBayar ? 'd-none' : 'd-block'"
      >
        <span class="mx-2 text-body-1 text--secondary">{{ item.title }}</span>
      </v-card-title> --> </v-card
    ><button-finish title="Selesai"></button-finish>
  </div>
</template>

<script>
export default {
  name: 'MetodePembayaran',
  components: {
    ButtonFinish: () => import('~/components/Base/ButtonFinish'),
  },
  data: () => ({
    showTransfer: false,
    showBayar: false,
    itemss: ['Mandiri', 'BCA'],
    items: [{ title: 'Mandiri' }, { title: 'BCA' }],
  }),
  head() {
    return {
      title: 'Metode Pemabayaran',
      meta: [
        {
          hid: 'metode pembayaran',
          name: 'metode pembayaran',
          content: 'Halaman metode pembayaran Fish-In',
        },
      ],
    }
  },
  methods: {
    dropdownTransfer() {
      this.showTransfer = !this.showTransfer
    },
    dropdownBayar() {
      this.showBayar = !this.showBayar
    },
  },
}
</script>

<style lang="sass" scoped>
.v-icon.v-icon::after
  background-color: transparent
</style>
