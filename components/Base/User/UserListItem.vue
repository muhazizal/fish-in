<template>
  <div>
    <v-list-item :key="message.name" class="px-0">
      <v-list-item-avatar
        width="100%"
        height="100%"
        max-width="48px"
        max-height="48px"
      >
        <v-img :src="message.img" />
      </v-list-item-avatar>
      <v-list-item-content class="align-start">
        <v-list-item-title class="mb-2">
          <span class="font-weight-medium">{{ message.sender }}</span>
          <span class="ml-2 green--text">{{ message.date }}</span>
        </v-list-item-title>
        <v-list-item-subtitle>{{ message.content }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn icon>
          <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: 'UserListItem',
  props: {
    message: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped></style>
