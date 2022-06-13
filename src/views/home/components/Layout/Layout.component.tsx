import { Component, JSXElement } from 'solid-js'
import { LayoutGrid } from './Layout.styled'

interface LayoutProps {
  children: JSXElement
  background: string
}

export const LayoutComponent: Component<LayoutProps> = ({ children, background }) => {
  return <LayoutGrid background={background}>{children}</LayoutGrid>
}
