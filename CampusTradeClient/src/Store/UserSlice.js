import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loggedIn:false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginReducer: (state) => {
      state.loggedIn=true
    },
    logOutReducer: (state) => {
      state.loggedIn=false
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginReducer,logOutReducer} = userSlice.actions

export default userSlice.reducer