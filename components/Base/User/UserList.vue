<template>
  <div>
    <v-list>
      <user-list-item
        v-for="(message, index) in messages"
        :key="index"
        :message="message"
        class="my-1"
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
