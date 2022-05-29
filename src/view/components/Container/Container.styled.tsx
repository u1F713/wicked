import { styled } from 'solid-styled-components'

interface StylesProps {
  columnSize: number
}

export const ContainerStyled = styled('div')(
  (props: StylesProps) => `
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    .column {
      max-width: ${props.columnSize}px;
    }
`
)
