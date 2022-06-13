import { Component, JSXElement } from 'solid-js'
import Background from '~/components/Background'
import { LayoutGrid } from './Layout.styled'

interface LayoutProps {
  children: JSXElement
  background: string
}

export const LayoutComponent: Component<LayoutProps> = ({ children, background }) => {
  return (
    <LayoutGrid>
      <Background image={background} />
      {children}
    </LayoutGrid>
  )
}
