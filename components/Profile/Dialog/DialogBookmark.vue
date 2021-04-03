<template>
  <v-row justify="start">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template #activator="{ on, attrs }">
        <v-container class="d-flex align-center">
          <div class="mr-auto d-flex align-center">
            <v-badge avatar inline bordered overlap>
              <template #badge>
                <v-avatar color="#5BC695"> 3 </v-avatar>
              </template>
              <span class="text-subtitle-1 mr-4"> Daftar Bookmark </span>
            </v-badge>
          </div>
          <v-btn text depressed plain small v-bind="attrs" v-on="on">
            <v-icon>mdi-chevron-right</v-icon>
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
