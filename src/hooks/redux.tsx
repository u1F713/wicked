import { onCleanup } from 'solid-js'
import { createStore } from 'solid-js/store'
import { Store, Action } from '@reduxjs/toolkit'

type ReturnType = [store: any, actions: Action[]]

function mapActions(store: Store, actions: Action): any {
  const mapped = {}
  for (const key in actions) {
    mapped[key] = (...args: any) => store.dispatch(actions[key](...args))
  }
  return mapped
}

export default function useRedux(store: Store, actions: Action): ReturnType {
  const [state, setState] = createStore(store.getState())
  const unsubscribe = store.subscribe(() => setState(store.getState()))
  onCleanup(() => unsubscribe())

  return [state, mapActions(store, actions)]
}
