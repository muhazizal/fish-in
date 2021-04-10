<template>
  <div>
    <v-list>
      <user-list-item
        v-for="(user, index) in users"
        :key="index"
        :user="user"
        :show-cta="showCta"
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
    users: {
      type: Array,
      default: () => [],
    },
    showCta: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
//
</style>
