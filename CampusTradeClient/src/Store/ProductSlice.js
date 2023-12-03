import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState={
    id:0
}
export const productSlice=createSlice({
    name: 'user',
  initialState,
  reducers: {
    changeProduct: (state,action) => {
        state.id = action.payload
      },
  },
  extraReducers:(builder)=>{

  }
})
export const {changeProduct}=productSlice.actions
export default productSlice.reducer