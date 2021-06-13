export default function ({ app, redirect }) {
  const userToken = app.$cookies.get('auth_token')
  if (!userToken) {
    return redirect('/login')
  }
}
