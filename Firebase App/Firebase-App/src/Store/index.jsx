import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './userslice'

const store = configureStore({
    reducer: UserSlice.reducer
  })

  export default store