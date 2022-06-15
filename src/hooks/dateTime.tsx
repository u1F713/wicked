import { createSignal } from 'solid-js'

const fmtTime = (val: number): string => {
  if (val < 10) {
    return `0${val}`
  }
  return val.toString()
}

const getDate = (): string => {
  const date = new Date()
  return `${fmtTime(date.getHours())}:${fmtTime(date.getMinutes())}`
}

const useDateTime = (): any => {
  const [getTime, setTime] = createSignal<string>(getDate())
  setInterval(() => setTime(getDate()), 500)

  return { getTime }
}
export default useDateTime
