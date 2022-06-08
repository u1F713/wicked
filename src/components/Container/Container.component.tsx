import { Component, JSXElement } from 'solid-js'
import { Wrapper } from './Container.styled'

interface ContainerProps {
  children: JSXElement
}

export const Container: Component<ContainerProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
