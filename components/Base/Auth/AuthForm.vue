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
      v-model="inputEmail"
      :rules="emailRules"
      prepend-inner-icon="mdi-account"
      label="E-mail"
      required
      @change="(value) => handleChangeEmail"
    ></v-text-field>

    <v-text-field
      v-model="inputPassword"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="passwordRules"
      prepend-inner-icon="mdi-lock"
      :type="showPassword ? 'text' : 'password'"
      name="input-10-1"
      label="Password"
      hint="At least 8 characters"
      @click:append="showPassword = !showPassword"
      @change="(value) => handleChangePassword"
    ></v-text-field>

    <div class="text-right mt-2">
      <router-link to="" class="text-decoration-none">
        Lupa Password?
      </router-link>
    </div>

    <v-container class="text-center px-0">
      <v-btn
        width="100%"
        :loading="loading"
        :disabled="loading"
        color="primary"
        large
        @click="authMethod"
      >
        {{ actionNameMethod }}
      </v-btn>
    </v-container>

    <div class="text-center my-1 d-flex align-center">
      <v-divider></v-divider>
      <p class="font-weight-light grey--text ma-0">Belum punya akun?</p>
      <v-divider></v-divider>
    </div>

    <v-container class="text-center px-0">
      <v-btn @click="redirectPage" large outlined color="primary" width="100%">
        {{ actionNameRedirect }}
      </v-btn>
    </v-container>
  </v-form>
</template>
<script>
export default {
  name: 'AuthForm',
  props: {
    email: {
      type: String,
      default: '',
    },
    password: { type: String, default: '' },
    page: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    loading: false,
    showPassword: false,
    valid: true,
    inputEmail: '',
    inputPassword: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      (v) => !!v || 'Password Required',
      (v) => (v && v.length >= 8) || 'Password must be more than 8 characters',
    ],
    select: null,
  }),

  computed: {
    actionNameMethod() {
      return this.page && this.page === 'login' ? 'Masuk' : 'Daftar'
    },
    actionNameRedirect() {
      return this.page && this.page === 'login' ? 'Daftar' : 'Masuk'
    },
  },

  created() {
    this.inputEmail = this.email
    this.inputPassword = this.password
  },

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    redirectPage() {
      if (this.page === 'login') {
        this.$router.push('/register')
      } else {
        this.$router.push('/login')
      }
    },
    async authMethod() {
      let method = 'account/registerAccount'

      if (this.page === 'login') {
        method = 'account/loginAccount'
      }
      this.loading = true
      const params = {
        email: this.email,
        password: this.password,
      }
      await this.$store.dispatch(method, params)
      this.loading = false
    },
    handleChangeEmail(value) {
      this.$emit('on-handle-change-email', value)
    },
    handleChangePassword(value) {
      this.$emit('on-handle-change-password', value)
    },
  },
}
</script>
<style lang="scss" scoped></style>
