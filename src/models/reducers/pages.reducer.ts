import { createSlice } from '@reduxjs/toolkit'
import pageAdapter from '../actions/entity.action'

const slicer = createSlice({
  name: 'pages',
  initialState: pageAdapter.getInitialState(),
  reducers: {}
})

export const pagesActions = slicer.actions
export default slicer.reducer
