import { Component } from 'solid-js'
import Clock from './components/Clock'
import Container from './components/Container'
import './styles/global.sass'

const App: Component = () => {
  return (
    <Container>
      <Clock />
    </Container>
  )
}
export default App
