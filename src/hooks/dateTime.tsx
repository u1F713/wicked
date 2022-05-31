import { createSignal } from 'solid-js'

const useDateTime = (): any => {
  const getDate = (): string => {
    return new Date().toLocaleDateString(navigator.language, {
      hour: 'numeric',
      minute: 'numeric',
      second: '2-digit'
    })
  }
  const [getTime, setTime] = createSignal<string>(getDate())
  setInterval(() => setTime(getDate()), 500)

  return { getTime }
}
export default useDateTime
