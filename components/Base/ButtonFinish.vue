<template>
  <div class="my-10 text-center">
    <v-btn color="success" class="text-capitalize font-weight-light px-16" dark>
      {{ title }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'ButtonFinish',
  props: {
    title: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style></style>
