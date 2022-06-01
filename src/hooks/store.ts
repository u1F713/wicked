import { createStore } from 'solid-js/store'
import { IPage } from '~/interfaces/page'

export const [store, setStore] = createStore<IPage[]>([])
export const addPage = (page: IPage): void => {
  setStore([...store, page])
}
