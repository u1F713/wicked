import { render } from 'solid-js/web'
import App from './view/App'

render(() => <App />, document.querySelector('#root') ?? document.body)
