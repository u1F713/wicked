import { styled } from 'solid-styled-components'

export const CardContainer = styled('article')`
  position: relative;
  width: 80px;
  height: 80px;
  padding: 0.3em;
  background-color: var(--bg);
  border-radius: 12px;
  cursor: pointer;
`

export const Icon = styled('figure')`
  display: flex;
  place-content: center;
  place-items: center;
  height: 100%;

  img {
    height: 70%;
  }
`
