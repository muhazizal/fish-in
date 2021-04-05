<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template #activator="{ on, attrs }">
        <v-container class="ma-4 d-flex align-center">
          <v-avatar size="48" class="mr-4">
            <img
              src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
              alt="Profile Pircture"
            />
          </v-avatar>
          <div class="d-flex flex-column mr-auto">
            <span class="text-subtitle-1">Bang Jago</span>
            <span class="text-subtitle-2 font-weight-regular grey--text">
              bangjago@gmail.com
            </span>
          </div>
          <v-btn text depressed plain small v-bind="attrs" v-on="on">
            <v-icon color="grey">mdi-chevron-right</v-icon>
          </v-btn>
        </v-container>
      </template>
      <dialog-profile-content @handleDialogToggle="handleDialogToggle" />
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'DialogProfile',
  components: {
    DialogProfileContent: () => import('./DialogProfileContent'),
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    handleDialogToggle(value) {
      this.dialog = value
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid rgba($color: grey, $alpha: 0.2);
  box-shadow: 0px 0px 5px 1px rgb(234, 234, 234);
  border-radius: 5px;
}
</style>
