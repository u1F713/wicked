import { Component } from 'solid-js'
import useDateTime from '~/hooks/dateTime'
import { ClockStyled } from './Clock.styled'

const Clock: Component = () => {
  const { getTime } = useDateTime()
  return <ClockStyled>{getTime()}</ClockStyled>
}
export default Clock
