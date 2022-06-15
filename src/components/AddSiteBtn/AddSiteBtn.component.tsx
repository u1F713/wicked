import { Component } from 'solid-js'
import { Container } from './AddSiteBtn.styled'
import Card from '@components/Card'

export const AddSiteBtnComponent: Component = () => {
  return (
    <Card actionOnClick={() => null}>
      <Container></Container>
    </Card>
  )
}
