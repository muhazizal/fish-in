<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="passwordRules"
      :type="show1 ? 'text' : 'password'"
      name="input-10-1"
      label="Password"
      hint="At least 8 characters"
      @click:append="show1 = !show1"
    ></v-text-field>

    <div class="">
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">
        Login
      </v-btn>
    </div>

    <div class="mt-3">
      <router-link to="/login" class="text-decoration-none">
        Don't have any account ? Register Here
      </router-link>
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
