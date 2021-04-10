<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <div class="mt-4">
      <h2 class="font-weight-regular">Selamat Datang di Fish-In</h2>
    </div>

    <div class="mt-2">
      <p class="font-weight-light grey--text text--darken-2">
        Silahkan masuk atau daftar akun terlebih dahulu
      </p>
    </div>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      prepend-inner-icon="mdi-account"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="passwordRules"
      prepend-inner-icon="mdi-lock"
      :type="show1 ? 'text' : 'password'"
      name="input-10-1"
      label="Password"
      hint="At least 8 characters"
      @click:append="show1 = !show1"
    ></v-text-field>

    <div class="text-right mt-2">
      <router-link to="" class="text-decoration-none">
        Lupa Password?
      </router-link>
    </div>

    <div class="text-center">
      <v-btn
        class="ma-2 mt-8"
        :loading="loading"
        :disabled="loading"
        color="primary"
        x-large
        @click="loader = 'loading'"
      >
        Masuk
      </v-btn>
    </div>

    <div class="text-center mt-4">
      <p class="font-weight-light">Belum punya akun?</p>
    </div>

    <div class="text-center">
      <v-btn x-large class="ma-2" outlined color="primary"> Daftar </v-btn>
    </div>
  </v-form>
</template>
<script>
export default {
  name: 'LoginForm',
  data: () => ({
    valid: true,
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    passwordRules: [
      (v) => !!v || 'Password Required',
      (v) => (v && v.length >= 8) || 'Password must be more than 8 characters',
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
