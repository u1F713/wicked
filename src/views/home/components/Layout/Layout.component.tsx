import { Component, JSXElement } from 'solid-js'
import { LayoutGrid } from './Layout.styled'

interface LayoutProps {
  children: JSXElement
}

export const LayoutComponent: Component<LayoutProps> = ({ children }) => {
  return <LayoutGrid>{children}</LayoutGrid>
}
