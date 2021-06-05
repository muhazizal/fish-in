export default function ({ store, redirect }) {
  if (!store.state.isAuthenticated) {
    console.log(store.state.account.isAuthenticated)
    return redirect('/login')
  }
}
