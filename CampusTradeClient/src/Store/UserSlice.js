import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {state.value = true},
    logout: (state) => {state.value = false},
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const {login, logout } = userSlice.actions

export default userSlice.reducer