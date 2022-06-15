import { Component } from 'solid-js'
import { ClockStyled } from './Clock.styled'
import useDateTime from '~/hooks/dateTime'

export const ClockComponent: Component = () => {
  const { getTime } = useDateTime()
  return <ClockStyled>{getTime()}</ClockStyled>
}
