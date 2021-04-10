<template>
  <div>
    <v-list-item :key="user.name" class="px-0">
      <v-list-item-avatar
        width="100%"
        height="100%"
        max-width="48px"
        max-height="48px"
      >
        <v-img :src="user.img" />
      </v-list-item-avatar>
      <v-list-item-content class="align-start">
        <v-list-item-title class="mb-2">
          <span class="font-weight-medium">{{ user.sender }}</span>
          <span v-if="user.date" class="ml-2 green--text text-caption">{{
            user.date
          }}</span>
        </v-list-item-title>
        <v-list-item-subtitle>{{ user.content }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action v-if="showCta">
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
    user: {
      type: Object,
      default: () => {},
    },
    showCta: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped></style>
