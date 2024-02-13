import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'cart',
    initialState: {
      carts : []
    },
    reducers: {
      UpDateCart: state => {
        state.cart += 1
      },
      removeCart: state => {
        
      }
    }
  })
  
  export const { incremented, decremented } = counterSlice.actions
