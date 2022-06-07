import { createStore } from 'solid-js/store'

export const [store, setStore] = createStore<any>([])
export const cleanStore = (): void => {
  setStore([])
}
export const addPage = (page: any): void => {
  setStore([...store, page])
}
