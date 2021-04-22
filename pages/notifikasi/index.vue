<template>
  <div>
    <notifikasi-list></notifikasi-list>
  </div>
</template>

<script>
export default {
  name: 'NotifikasiPage',
  components: {
    NotifikasiList: () => import('@/components/Notifikasi/NotifikasiList'),
  },
  layout: 'default',
  head() {
    return {
      title: 'Notifikasi',
      meta: [
        {
          hid: 'notifikasi',
          name: 'notifikasi',
          content: 'Halaman notifikasi Fish-In',
        },
      ],
    }
  },
}
</script>
