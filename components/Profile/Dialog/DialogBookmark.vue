<template>
  <v-row justify="start">
    <v-container class="d-flex align-center">
      <div class="mr-auto d-flex align-center">
        <v-badge avatar inline bordered overlap>
          <template #badge>
            <v-avatar color="#5BC695"> 3 </v-avatar>
          </template>
          <span class="text-subtitle-1 mr-4"> Daftar Bookmark </span>
        </v-badge>
      </div>
      <v-btn text depressed plain small to="/bookmark">
        <v-icon color="grey">mdi-chevron-right</v-icon>
      </v-btn>
    </v-container>
  </v-row>
</template>

<script>
export default {
  name: 'DialogProfile',
}
</script>
