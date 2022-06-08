import { Component, JSXElement } from 'solid-js'
import { CardContainer, Icon } from './Card.styled'

interface CardProps {
  children: JSXElement
  actionOnClick?: () => void
}

export const CardComponent: Component<CardProps> = ({ children, actionOnClick }) => {
  return (
    <article onclick={actionOnClick}>
      <CardContainer>
        <Icon>{children}</Icon>
      </CardContainer>
    </article>
  )
}
