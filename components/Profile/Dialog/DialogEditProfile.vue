<template>
  <v-card>
    <v-card-title>
      <span class="headline">Edit Profil</span>
    </v-card-title>
    <v-card-text class="pb-0">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" class="px-0 pb-0">
              <v-text-field
                v-model="inputName"
                :rules="nameRules"
                label="Nama"
                required
                validate-on-blur
                @input="handleChangeName"
              />
            </v-col>
            <v-col cols="12" class="px-0 pb-0">
              <v-text-field
                v-model="inputEmail"
                :rules="emailRules"
                type="email"
                label="E-mail"
                required
                validate-on-blur
                @input="handleChangeEmail"
              />
            </v-col>
            <v-col cols="12" class="px-0 pb-0">
              <v-text-field
                v-model="inputPhonenumber"
                :rules="phonenumberRules"
                label="Nomor Telepon"
                required
                validate-on-blur
                @input="handleChangePhonenumber"
                @keydown="handleValidatePhonenumber"
              />
            </v-col>
            <v-col cols="12" class="px-0 pb-0">
              <v-text-field
                v-model="inputAddress"
                :rules="addressRules"
                label="Alamat"
                required
                validate-on-blur
                @input="handleChangeAddress"
              />
            </v-col>
            <v-col cols="12" class="px-0 pb-0">
              <v-text-field
                v-model="inputPassword"
                type="password"
                :rules="passwordRules"
                label="Password"
                required
                validate-on-blur
                @input="handleChangePassword"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="handleCloseDialog">
        Batal
      </v-btn>
      <v-btn
        color="blue darken-1"
        text
        :disabled="loadingApp"
        :loading="loadingApp"
        @click="handleSubmitEditProfile"
      >
        Simpan
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'DialogProfileContent',
  props: {
    account: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      loadingApp: false,
      inputName: '',
      nameRules: [(v) => !!v || 'Name is required'],
      inputEmail: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      inputPassword: '',
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) =>
          (v && v.length >= 8) || 'Password must be more than 8 characters',
      ],
      // inputImage: '',
      // imageRules: [(v) => !!v || 'Image is required'],
      inputAddress: '',
      addressRules: [(v) => !!'Address is required'],
      inputPhonenumber: '',
      phonenumberRules: [(v) => !!v || 'Phonenumber is required'],
    }
  },
  computed: {
    isFormValid() {
      return true
    },
  },
  mounted() {
    this.handleInitInput()
  },
  methods: {
    handleCloseDialog() {
      this.$emit('handleDialogToggle', false)
    },
    async handleSubmitEditProfile() {
      const params = {
        nama: this.inputName,
        alamat: this.inputAddress,
        no_telp: this.inputPhonenumber,
      }
      this.loadingApp = true
      try {
        await this.$store.dispatch('account/editProfile', params)
        this.handleCloseDialog()
      } catch (error) {
        console.log('Error editProfile: ', error)
      }
      this.loadingApp = false
    },
    handleChangeName(value) {
      this.inputName = value
    },
    handleChangeEmail(value) {
      this.inputEmail = value
    },
    handleChangeAddress(value) {
      this.inputAddress = value
    },
    handleChangePhonenumber(value) {
      this.inputPhonenumber = value
    },
    handleChangePassword(value) {
      this.inputPassword = value
    },
    // TODO: validate phonenumber input
    handleValidatePhonenumber(event) {
      console.log(event)
    },
    handleInitInput() {
      if (this.account) {
        this.inputName = this.account.nama_pembeli
        this.inputAddress = this.account.alamat_pembeli
        this.inputEmail = this.account.email_pembeli
        this.inputPhonenumber = this.account.no_telp_pembeli
        this.inputPassword = this.account.password
        // this.inputImage = this.account.image
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
