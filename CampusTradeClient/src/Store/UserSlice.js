import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchUserDetailsApi } from '../apis';
const initialState = {
  loggedIn: false,
  userDetails: {
    _id: '',
    name: '',
    email: '',
    password: '',
    college_name: '',
    year: '',
    branch: '',
    ads: [],
    report: [],
    adsPosted : 0,
    adsBought : 0,
    earnings: 0,
    adsBoughtMoney: 0,
    profit: 0,
  }

}

export const fetchUserDetails = createAsyncThunk(
  "UserDetails/fetch", async (id) => {
    try {
      const response = await fetchUserDetailsApi(id)
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    loginReducer: (state) => {
      state.loggedIn = true
    },
    logOutReducer: (state) => {
      state.loggedIn = false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      state.userDetails={
        ...action.payload
      }
    })
    builder.addCase(fetchUserDetails.pending, (state, action) => {
      state.userDetails=initialState.userDetails
    })
    builder.addCase(fetchUserDetails.rejected, (state, action) => {
      state.userDetails=initialState.userDetails
    })
    
  }
})

// Action creators are generated for each case reducer function
export const { loginReducer, logOutReducer } = userSlice.actions

export default userSlice.reducer