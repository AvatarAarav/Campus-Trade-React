import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchAdminDetailsApi } from '../apis'
const initialState = {
  isAdmin: false,
  loggedIn:false,
  adminDetails: {
    _id: '',
    name: '',
    email: '',
    password: '',
    college_name: '',
    year: '',
    branch: '',
    ads: [],
    report: [],
  }

}

export const fetchAdminDetails = createAsyncThunk(
  "AdminDetails/fetch", async (id) => {
    try {
      const response = await fetchAdminDetailsApi(id)
      console.log(response)
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
)

export const adminSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    adminLoginReducer: (state) => {
      state.loggedIn = true
      state.isAdmin = true
    },
    adminLogOutReducer: (state) => {
      state.loggedIn = false
      state.isAdmin = false
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdminDetails.fulfilled, (state, action) => {
      state.adminDetails={
        ...action.payload
      }
    })
    builder.addCase(fetchAdminDetails.pending, (state, action) => {
      state.adminDetails=initialState.adminDetails
    })
    builder.addCase(fetchAdminDetails.rejected, (state, action) => {
      state.adminDetails=initialState.adminDetails
    })
    
  }
})

// Action creators are generated for each case reducer function
export const { adminLoginReducer, adminLogOutReducer } = adminSlice.actions

export default adminSlice.reducer