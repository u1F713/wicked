import { createSignal } from 'solid-js'

const getDate = (): string => {
  const date = new Date()
  return `${date.getHours()}:${date.getMinutes()}`
}

const useDateTime = (): any => {
  const [getTime, setTime] = createSignal<string>(getDate())
  setInterval(() => setTime(getDate()), 500)

  return { getTime }
}
export default useDateTime
