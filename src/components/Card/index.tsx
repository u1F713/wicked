import { Component, JSXElement } from 'solid-js'
import { IPage } from '~/interfaces/page'
import { CardStyled } from './Card.styled'

interface CardProps {
  page: IPage
  children: JSXElement
}

const Card: Component<CardProps> = ({ page, children }) => {
  return (
    <CardStyled>
      <a href={page.link.toString()}>{children}</a>
    </CardStyled>
  )
}
export default Card
