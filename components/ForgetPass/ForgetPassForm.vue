<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <div class="mt-4">
      <h2 class="font-weight-regular">Lupa Password</h2>
    </div>

    <div class="mt-2">
      <p class="font-weight-light grey--text">
        Silahkan masukkan e-mail untuk pemulihan password
      </p>
    </div>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      prepend-inner-icon="mdi-email"
      label="E-mail"
      required
    ></v-text-field>

    <v-container class="text-center">
      <v-btn
        width="100%"
        :loading="loading"
        :disabled="loading"
        color="primary"
        large
        @click="loading = true"
      >
        Pulihkan Password
      </v-btn>
    </v-container>

    <!-- <div class="text-center mt-4 d-flex align-center">
      <v-divider></v-divider>
      <p class="font-weight-light grey--text ma-0">Belum punya akun?</p>
      <v-divider></v-divider>
    </div> -->

    <v-container class="text-center">
      <v-btn large outlined color="primary" width="100%"> Cancel </v-btn>
    </v-container>
  </v-form>
</template>
<script>
export default {
  name: 'LoginForm',
  data: () => ({
    loading: false,
    valid: true,
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],

    select: null,
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
  },
}
</script>
<style lang="scss" scoped></style>
