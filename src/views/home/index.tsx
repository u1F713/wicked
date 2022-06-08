import { Component, For } from 'solid-js'
import { store } from '~/hooks/store'
import Layout from './components/Layout'
import Clock from '@components/Clock'
import SiteComponent from '@components/Site'

const HomePage: Component = () => {
  return (
    <Layout>
      <section>
        <Clock />
      </section>
      <section>
        <h3>Favorite</h3>
        <For each={store}>{(item: any) => <SiteComponent name={item.name} address={item.link} />}</For>
      </section>
    </Layout>
  )
}
export default HomePage
