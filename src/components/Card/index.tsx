import { Component } from 'solid-js'
import { IPage } from '~/interfaces/page'
import { CardStyled } from './Card.styled'

interface CardProps {
  page: IPage
}

const Card: Component<CardProps> = ({ page }) => {
  return (
    <CardStyled>
      <a href={page.link.toString()}>{page.name}</a>
    </CardStyled>
  )
}
export default Card
