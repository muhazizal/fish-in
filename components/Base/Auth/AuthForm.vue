<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <div class="mt-4">
      <h2 class="font-weight-regular">Selamat Datang di Fish-In</h2>
    </div>

    <div class="mt-2">
      <p class="font-weight-light grey--text">
        Masukkan akun Anda untuk {{ getSubtitle }}
      </p>
    </div>

    <v-text-field
      v-model="inputEmail"
      prepend-inner-icon="mdi-account"
      label="E-mail"
      required
      :rules="emailRules"
      @input="handleChangeEmail"
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

    <div class="text-right mt-2">
      <router-link to="" class="text-decoration-none">
        Lupa Password?
      </router-link>
    </div>

    <v-container class="text-center px-0">
      <v-btn
        width="100%"
        :loading="loadingApp"
        :disabled="loadingApp"
        color="primary"
        large
        @click="handleDispatchAuth"
      >
        {{ getNameMethod }}
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
</template>
<script>
export default {
  name: 'AuthForm',
  props: {
    email: {
      type: String,
      default: '',
    },
    password: {
      type: String,
      default: '',
    },
    page: {
      type: String,
      default: '',
    },
    loadingApp: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    showPassword: false,
    valid: true,
    select: null,
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
  }),
  computed: {
    getNameMethod() {
      return this.page && this.page === 'login' ? 'Masuk' : 'Daftar'
    },
    getNameRedirect() {
      return this.page && this.page === 'login' ? 'Daftar' : 'Masuk'
    },
    getSubtitle() {
      return this.page && this.page === 'login' ? 'Login' : 'Register'
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
    handleRedirectPage() {
      if (this.page === 'login') {
        this.$router.push('/register')
      } else {
        this.$router.push('/login')
      }
    },
    handleChangeEmail(value) {
      this.$emit('on-change-email', value)
    },
    handleChangePassword(value) {
      this.$emit('on-change-password', value)
    },
    handleAuthMethod() {
      return this.page === 'login' ? 'on-login-account' : 'on-register-account'
    },
    async handleDispatchAuth() {
      const authMethod = this.handleAuthMethod()
      await this.$emit(authMethod, {
        email: this.inputEmail,
        password: this.inputPassword,
      })
    },
  },
}
</script>
<style lang="scss" scoped></style>
