import { Component, For, onMount } from 'solid-js'
import Clock from './components/Clock'
import Container from './components/Container'
import { store, addPage } from './hooks/store'
import './styles/global.sass'

const App: Component = () => {
  onMount(() => {
    addPage({ name: 'repo', link: new URL('https://github.com/waterssh/wicked') })
  })
  return (
    <Container>
      <Clock />
      <For each={store}>{(item) => <span>{item.name}</span>}</For>
    </Container>
  )
}
export default App
