import { Component } from 'solid-js'
import { render } from 'solid-js/web'

const App: Component = () => {
  return <h1>Don't you know I'm still standing better than I ever did?</h1>
}

render(() => <App />, document.querySelector('#root') ?? document.body)
