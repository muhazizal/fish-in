<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="(item, index) in items" :key="index">
      <v-expansion-panel-header class="px-3">
        {{ item.title }}
      </v-expansion-panel-header>
      <v-expansion-panel-content class="text-justify">
        {{ item.description }}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'BaseExpansionPanels',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
