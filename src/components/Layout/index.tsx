import { Component, For } from 'solid-js'
import { IPage } from '~/interfaces/page'
import { LayoutStyled } from './Layout.styled'
import Card from '../Card'
import Clock from '../Clock'
import { CardGrid } from '../Card/Card.styled'

interface LayoutProps {
  img: string
  cards: IPage[]
}

const Layout: Component<LayoutProps> = ({ cards }) => {
  return (
    <LayoutStyled>
      <figure>
        <Clock />
      </figure>
      <CardGrid>
        <For each={cards}>{(item) => <Card page={item} />}</For>
      </CardGrid>
    </LayoutStyled>
  )
}
export default Layout
