import { Component } from 'solid-js'
import { ModalFrame } from './AddSiteModal.styled'

interface ModalFrameProps {
  visibility: boolean
}

export const AddSiteModalComponent: Component<ModalFrameProps> = ({ visibility }) => {
  return <ModalFrame visible={visibility}></ModalFrame>
}
