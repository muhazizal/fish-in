<template>
  <v-row justify="start">
    <v-dialog v-model="dialog" persistent max-width="600px" disabled>
      <template #activator="{ on, attrs }">
        <v-container class="d-flex align-center">
          <div class="mr-auto d-flex align-center">
            <span class="text-subtitle-1 mr-4"> Kritik dan Saran </span>
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
  name: 'DialogFeedback',
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
