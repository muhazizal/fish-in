<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <div class="mt-4">
      <h2 class="font-weight-regular">Selamat Datang di Fish-In</h2>
    </div>

    <div class="mt-2">
      <p class="font-weight-light grey--text">
        Silahkan masuk atau daftar akun terlebih dahulu
      </p>
    </div>

    <v-text-field
      v-model="username"
      :counter="32"
      :rules="usernameRules"
      prepend-inner-icon="mdi-account"
      label="Username"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      prepend-inner-icon="mdi-email"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="phone"
      :rules="phoneRules"
      prepend-inner-icon="mdi-phone"
      label="Phone"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="passwordRules"
      :type="show1 ? 'text' : 'password'"
      name="input-10-1"
      prepend-inner-icon="mdi-lock"
      label="Password"
      hint="At least 8 characters"
      @click:append="show1 = !show1"
    ></v-text-field>

    <v-container class="text-center">
      <v-btn
        width="100%"
        :loading="loading"
        :disabled="loading"
        color="primary"
        large
        @click="loader = 'loading'"
      >
        Daftar
      </v-btn>
    </v-container>

    <div class="text-center mt-4 d-flex align-center">
      <v-divider></v-divider>
      <p class="font-weight-light grey--text ma-0">Sudah punya akun?</p>
      <v-divider></v-divider>
    </div>

    <v-container class="text-center">
      <v-btn large outlined color="primary" width="100%"> Masuk </v-btn>
    </v-container>
  </v-form>
</template>
<script>
export default {
  name: 'RegisterForm',
  data: () => ({
    valid: true,
    name: '',
    usernameRules: [
      (v) => !!v || 'Username is required',
      (v) =>
        (v && v.length <= 32) || 'Username must be less than 32 characters',
    ],
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
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
  },
}
</script>
<style lang="scss" scoped></style>
