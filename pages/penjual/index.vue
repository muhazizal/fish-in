<template>
  <div>
    <v-form ref="form">
      <div class="mt-4">
        <h2 class="font-weight-regular">Buat Produk</h2>
      </div>

      <v-text-field
        v-model="inputName"
        label="Nama Produk"
        required
      ></v-text-field>

      <v-text-field
        v-model="inputPassword"
        prepend-inner-icon="mdi-lock"
        name="input-10-1"
        label="Password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="passwordRules"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
        @input="handleChangePassword"
      ></v-text-field>

      <v-container class="text-center px-0">
        <v-btn
          width="100%"
          :loading="loadingApp"
          :disabled="loadingApp"
          color="primary"
          large
          class="mt-3"
          @click="handleDispatchAuthPembeli"
        >
          {{ getNameMethodPembeli }}
        </v-btn>
        <v-btn
          width="100%"
          :loading="loadingApp"
          :disabled="loadingApp"
          color="primary"
          large
          class="mt-3"
          @click="handleDispatchAuthPenjual"
        >
          {{ getNameMethodPenjual }}
        </v-btn>
      </v-container>

      <div class="text-center my-1 d-flex align-center">
        <v-divider></v-divider>
        <p class="font-weight-light grey--text ma-0">Belum punya akun?</p>
        <v-divider></v-divider>
      </div>

      <v-container class="text-center px-0">
        <v-btn
          large
          outlined
          color="primary"
          width="100%"
          @click="handleRedirectPage"
        >
          {{ getNameRedirect }}
        </v-btn>
      </v-container>
    </v-form>
  </div>
</template>
<script>
export default {
  name: 'PenjualPage',
  layout: 'penjual',
  head() {
    return {
      title: 'Beranda Penjual',
      meta: [
        {
          hid: 'beranda-penjual',
          name: 'beranda-penjual',
          content: 'Halaman beranda Penjual',
        },
      ],
    }
  },
}
</script>
