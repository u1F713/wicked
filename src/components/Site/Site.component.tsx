import { Component } from 'solid-js'
import { Name, SiteLayout } from './Site.styled'
import Card from '@components/Card'

interface ComponentProps {
  name: string
  address: string
}

export const SiteComponent: Component<ComponentProps> = ({ name, address }) => {
  const { origin } = new URL(address)

  return (
    <SiteLayout>
      <Card actionOnClick={() => location.replace(address)}>
        <img src={`${origin}/favicon.ico`} alt={name} />
      </Card>
      <Name>{name}</Name>
    </SiteLayout>
  )
}
