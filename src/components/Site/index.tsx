import { Component } from 'solid-js'
import Card from '@components/Card'

interface ComponentProps {
  name: string
  address: string
}

const SiteComponent: Component<ComponentProps> = ({ name, address }) => {
  const { origin } = new URL(address)

  return (
    <section>
      <Card>
        <img src={`${origin}/favicon.ico`} alt={name} />
      </Card>
      <span>{name}</span>
    </section>
  )
}
export default SiteComponent
