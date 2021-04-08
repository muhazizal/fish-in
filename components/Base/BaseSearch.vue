<template>
  <div>
    <v-form>
      <v-text-field
        v-model="search"
        :label="label"
        solo
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
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    // valid: false,
    search: '',
  }),
}
</script>

<style lang="sass" scoped></style>
