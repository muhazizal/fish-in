<template>
  <div>
    <v-list three-line>
      <user-list-item
        v-for="(message, index) in messages"
        :key="index"
        :message="message"
      />
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  components: {
    UserListItem: () => import('./UserListItem'),
  },
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
//
</style>
