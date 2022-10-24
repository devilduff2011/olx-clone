import { createSlice } from '@reduxjs/toolkit'

const initialState = {  }

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   setEmail(state, action) {
    
   }
  },
})

export const { } = userSlice.actions
export default userSlice.reducer