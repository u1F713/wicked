import { Component, JSXElement } from 'solid-js'
import { CardContainer } from './Card.styled'

interface CardProps {
  children: JSXElement
  actionOnClick?: () => void
}

export const CardComponent: Component<CardProps> = ({ children, actionOnClick }) => {
  return (
    <article onclick={actionOnClick}>
      <CardContainer>{children}</CardContainer>
    </article>
  )
}
