import { Component } from 'solid-js'
import { IPage } from '~/interfaces/page'
import { CardStyled } from './Card.styled'

interface CardProps {
  page: IPage
}

const Card: Component<CardProps> = ({ page }) => {
  return (
    <CardStyled>
      <a href={page.link.toString()}>
        <figure>
          <img src="https://github.com/favicon.ico" />
        </figure>
        <span>{page.name}</span>
      </a>
    </CardStyled>
  )
}
export default Card
