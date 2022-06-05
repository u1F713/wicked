import { Component, JSXElement } from 'solid-js'
import { ActionStyled, CardStyled } from './Card.styled'

interface CardProps {
  children: JSXElement
  actionOnClick?: () => void
}

const Card: Component<CardProps> = ({ children, actionOnClick }) => {
  return (
    <CardStyled>
      <ActionStyled onClick={actionOnClick}>{children}</ActionStyled>
    </CardStyled>
  )
}
export default Card
