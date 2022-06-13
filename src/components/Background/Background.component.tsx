import { Component } from 'solid-js'
import { Display } from './Background.styled'

interface BackgroundProps {
  image: string
}

export const BackgroundComponent: Component<BackgroundProps> = ({ image }) => {
  return <Display background={image} />
}
