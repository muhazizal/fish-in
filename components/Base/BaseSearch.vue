<template>
  <div>
    <v-form>
      <v-text-field
        v-model="search"
        solo
        label="Search"
        prepend-inner-icon="mdi-magnify"
        clearable
        hide-details
        single-line
      />
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'BaseSearch',
  data: () => ({
    // valid: false,
    search: '',
  }),
}
</script>

<style lang="sass" scoped></style>
