<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <div class="mt-3">
      <p class="font-weight-medium">Selamat Datang di Fish-in</p>
      <p class="ftext-lowercase">
        Silahkan masuk atau daftar akun terlebih dahulu
      </p>
    </div>

    <v-text-field
      v-model="username"
      :rules="usernameRules"
      label="Username"
      prepend-inner-icon="mdi-account"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="passwordRules"
      :type="(show1 ? 'text' : 'mdi-account', 'password')"
      name="input-10-1"
      label="Password"
      prepend-inner-icon="mdi-lock"
      hint="At least 8 characters"
      @click:append="show1 = !show1"
    ></v-text-field>

    <div class="mt-3">
      <router-link to="" class="text-decoration-none">
        <p class="text-right">Lupa Password?</p>
      </router-link>
    </div>

    <div class="text-center">
      <v-btn
        class="ma-2"
        large
        :loading="loading"
        :disabled="loading"
        color="primary"
        @click="loader = 'loading'"
      >
        Masuk
      </v-btn>
    </div>

    <div class="mt-3 text-center">
      <p>Belum punya akun?</p>
    </div>

    <div class="text-center">
      <v-btn class="ma-2" large outlined color="primary"> Daftar </v-btn>
    </div>
  </v-form>
</template>
<script>
export default {
  name: 'LoginForm',
  data: () => ({
    valid: true,
    username: '',
    usernameRules: [
      (v) => !!v || 'Username is required',
      (v) => /.+@.+\..+/.test(v) || 'Username must be valid',
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
