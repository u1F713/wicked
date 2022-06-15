import { styled } from 'solid-styled-components'

interface ModalFrameProps {
  visible: boolean
}

export const ModalFrame = styled('div')((props: ModalFrameProps) => ({
  position: 'absolute',
  top: '0',
  bottom: '0',
  width: '100%',
  height: '100%',
  visibility: props.visible ? 'visible' : 'hidden'
}))
