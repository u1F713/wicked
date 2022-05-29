import { Component, JSX } from 'solid-js'

interface ContainerProps {
  children: JSX.Element
}

const Container: Component<ContainerProps> = ({ children }) => {
  return (
    <div class="container">
      <div>{children}</div>
    </div>
  )
}
export default Container
