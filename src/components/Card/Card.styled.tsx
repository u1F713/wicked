import { styled } from 'solid-styled-components'

export const CardStyled = styled('section')`
  display: flex;
  place-content: center;
  place-items: center;
  text-align: center;
  padding: 0.4em;
  border-radius: 5px;

  &:hover {
    background-color: #474d5890;
  }

  figure {
    position: relative;
    display: flex;
    place-items: center;
    place-content: center;
    height: 100px;
    width: 100px;
    min-height: 100%;
    background-color: #474d58;
    border-radius: 5px;
    margin: 0.5em;

    img {
      height: 50%;
    }
  }
`
export const CardGrid = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1em;
`
