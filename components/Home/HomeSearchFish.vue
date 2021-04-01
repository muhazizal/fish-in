<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-subtitle-1 font-weight-medium">
            Search Your Favorite Fish
          </h2>
        </v-col>

        <v-col cols="6" class="pt-0">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Price"
            required
            class="pt-0"
            prepend-inner-icon="mdi-currency-usd"
          ></v-text-field>
        </v-col>

        <v-col cols="6" class="pt-0">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Quantity"
            required
            class="pt-0"
            prepend-inner-icon="mdi-fish"
          ></v-text-field>
        </v-col>

        <v-col cols="12" class="pt-0">
          <v-btn color="#5BC695" depressed width="100%" class="white--text">
            Search Fish
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'HomeSearchFish',
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
}
</script>

<style lang="scss" scoped>
.v-form {
  margin: 16px 0;
  box-shadow: 0px 0px 8px 2px rgb(219, 219, 219);
  border-radius: 5px;
}
</style>
