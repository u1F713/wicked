import { Component } from 'solid-js'
import { ClockStyled } from './Clock.styled'
import useDateTime from '~/hooks/dateTime'

const Clock: Component = () => {
  const { getTime } = useDateTime()
  return <ClockStyled>{getTime()}</ClockStyled>
}
export default Clock
