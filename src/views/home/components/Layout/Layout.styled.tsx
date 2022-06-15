import { styled } from 'solid-styled-components'

export const LayoutGrid = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  place-content: center;
  place-items: center;
  gap: 3em;
`

export const FontDisplay = styled('h3')`
  font-size: 2.1em;
  font-weight: bold;
`

export const Section = styled('section')`
  min-width: 80%;
`
export const CardList = styled('section')`
  display: flex;
  flex-flow: row wrap;
  gap: 2em;
`
