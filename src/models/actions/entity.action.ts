import { createEntityAdapter } from '@reduxjs/toolkit'
import IPages from '../interfaces/pages'

export default createEntityAdapter<IPages>({
  selectId: (entity) => entity.id,
  sortComparer: (x, y) => x.name.localeCompare(y.name)
})
