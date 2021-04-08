<template>
  <v-container class="pa-0 d-flex flex-column align-center">
    <v-img
      :src="require('~/assets/images/faq.svg')"
      alt="FAQ Illustration"
      max-width="80%"
      class="mb-8"
    />
    <base-expansion-panels :items="items" />
  </v-container>
</template>

<script>
export default {
  name: 'FaqPage',
  components: {
    BaseExpansionPanels: () => import('@/components/Base/BaseExpansionPanels'),
  },
  data: () => ({
    items: [
      {
        title: 'Apa itu Fish-in ?',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  liquip ex ea commodo consequat.',
      },
      {
        title: 'Kenapa Harus Memesan di Fish-in ?',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  liquip ex ea commodo consequat.',
      },
      {
        title: 'Apa itu Daftar Boookmark ?',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  liquip ex ea commodo consequat.',
      },
      {
        title: 'Bagaimana Cara Memesan Ikan di Fish-in ?',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  liquip ex ea commodo consequat.',
      },
    ],
  }),
  head() {
    return {
      title: 'FAQ',
      meta: [
        {
          hid: 'faq',
          name: 'faq',
          content: 'Halaman FAQ Fish-In',
        },
      ],
    }
  },
}
</script>
