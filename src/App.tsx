import { Component, onCleanup, onMount } from 'solid-js'
import { addPage, cleanStore } from './hooks/store'
import './styles/main.sass'
import IndexRoute from './views'

const App: Component = () => {
  onMount(() => {
    addPage({ name: 'repo', link: new URL('https://github.com/waterssh/wicked') })
  })
  onCleanup(cleanStore)
  return <IndexRoute />
}
export default App
