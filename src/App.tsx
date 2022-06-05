import { Component, onCleanup, onMount } from 'solid-js'
import Container from './components/Container'
import Layout from './components/Layout'
import { store, addPage, cleanStore } from './hooks/store'
import './styles/main.sass'

const App: Component = () => {
  onMount(() => {
    addPage({ name: 'repo', link: new URL('https://github.com/waterssh/wicked') })
  })
  onCleanup(cleanStore)
  return (
    <Container>
      <Layout img="" cards={store} />
    </Container>
  )
}
export default App
