import { styled } from 'solid-styled-components'

export const Display = styled('div')(
  (props: { background: string }) => `
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url(${props.background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -9;
    filter: brightness(0.7) blur(12px);
`
)
