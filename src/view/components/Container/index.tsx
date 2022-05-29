import { Component, JSX } from 'solid-js'
import { ContainerStyled } from './Container.styled'

interface ContainerProps {
  children: JSX.Element
}

const Container: Component<ContainerProps> = ({ children }) => {
  return (
    <ContainerStyled columnSize={700}>
      <div class="column">{children}</div>
    </ContainerStyled>
  )
}
export default Container
