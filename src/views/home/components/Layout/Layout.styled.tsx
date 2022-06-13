import { styled } from 'solid-styled-components'

export const LayoutGrid = styled('div')(
  (props: { background: string }) => `
    display: grid;
    min-height: 100vh;
    place-content: center;
    place-items: center;
    gap: 2em;
    background-image: url(${props.background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `
)

export const FontDisplay = styled('h3')`
  font-size: 2.1em;
  font-weight: bold;
`
