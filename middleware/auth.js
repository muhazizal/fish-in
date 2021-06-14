export default function ({ app, redirect, store }) {
  const userToken = app.$cookies.get('auth_token')
  if (!userToken) {
    return redirect('/login')
  }
}
