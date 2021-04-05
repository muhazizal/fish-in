<template>
  <v-card>
    <v-card-title>
      <span class="headline">Edit Profil</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4"> CONTENT GOES HERE </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="handleDialogAction">
        Batal
      </v-btn>
      <v-btn color="blue darken-1" text @click="handleDialogAction">
        Simpan
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'DialogProfileContent',
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleDialogAction() {
      this.$emit('handleDialogToggle', false)
    },
  },
}
</script>

<style lang="scss" scoped></style>
