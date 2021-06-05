export default function ({ $axios, store, redirect }) {
  $axios.onRequest((config) => {
    // start from here @maul
    // check bisa makek local storage gk buat set headers tokennya
    const userToken = localStorage.getItem('usr_tkn')
    if (userToken) {
      config.headers.common['FISHIN-SERVER'] = userToken
    }
  })
  // $axios.onError((error) => {
  //   if (error.response && error.response.status === 500) {
  //     redirect('/login')
  //   }
  // })
  // $axios.interceptors.response.use((response) => {
  //   if (response.status === 200) {
  //     if (
  //       response.request.responseURL &&
  //       response.request.responseURL.includes('login')
  //     ) {
  //       store.dispatch('setUser', response)
  //     }
  //   }
  //   return response
  // })
}
