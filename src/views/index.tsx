import { Component, For } from 'solid-js'
import { store } from '~/hooks/store'
import Clock from '@components/Clock'
import SiteComponent from '~/components/Site'

const IndexRoute: Component = () => {
  return (
    <div>
      <section>
        <Clock />
      </section>
      <For each={store}>{(item: any) => <SiteComponent name={item.name} address={item.link} />}</For>
    </div>
  )
}
export default IndexRoute
