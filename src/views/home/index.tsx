import { Component, For, createSignal } from 'solid-js'
import { store } from '~/hooks/store'
import { FontDisplay } from './components/Layout/Layout.styled'
import Container from '@components/Container'
import Layout from './components/Layout'
import Clock from '@components/Clock'
import SiteComponent from '@components/Site'

const HomePage: Component = () => {
  const [getBackground, setBackground] = createSignal<string>('')
  setBackground('https://res.cloudinary.com/dmfac7zfe/image/upload/v1655133006/Wallpapers/Suisei.jpg')

  return (
    <Layout background={getBackground()}>
      <section>
        <Clock />
      </section>
      <Container>
        <FontDisplay>Favorite</FontDisplay>
        <For each={store}>{(item: any) => <SiteComponent name={item.name} address={item.link} />}</For>
      </Container>
    </Layout>
  )
}
export default HomePage
