import { createSlice } from '@reduxjs/toolkit'


const UserSlice = createSlice({
    name: 'User',
    initialState: {
      value: 0
    },
    reducers: {
      userId: (state , data) => {
        state.name = data.payload;
      }
    }
  })

  export const { userId } = UserSlice.actions

  export default UserSlice